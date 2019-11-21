import { Injectable } from '@angular/core';
import { ClientManagerStore } from './client-manager.store';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ClientManager } from './client-manager.model';

interface Manager {
  name: string;
  pluginExports: ClientManager;
}

@Injectable({ providedIn: 'root' })
export class ClientManagerService {

  constructor(protected store: ClientManagerStore, private http: HttpClient) {

  }

  getAll() {
    this.http.post<Manager[]>(environment.gridURL, {
      jsonrpc: '2.0',
      method: 'getAllClientManagers',
      params: [],
      id: 1
    }).subscribe((managers) => {
      const clientManagers = managers.map(manager => manager.pluginExports);
      this.store.add(clientManagers);
    });
  }
}
