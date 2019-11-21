import { Injectable } from '@angular/core';
import { ClientManager } from './client-manager.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface ClientManagerState extends EntityState<ClientManager> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'client-manager', idKey: 'name' })
export class ClientManagerStore extends EntityStore<ClientManagerState> {

  constructor() {
    super();
  }

}

