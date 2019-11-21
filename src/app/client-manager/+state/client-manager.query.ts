import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { ClientManagerStore, ClientManagerState } from './client-manager.store';

@Injectable({ providedIn: 'root' })
export class ClientManagerQuery extends QueryEntity<ClientManagerState> {

  constructor(protected store: ClientManagerStore) {
    super(store);
  }

}
