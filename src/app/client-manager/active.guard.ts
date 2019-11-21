import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ClientManagerStore, ClientManagerQuery, ClientManagerService } from './+state';

@Injectable({
  providedIn: 'root'
})
export class ClientManagerActiveGuard implements CanActivate {
  constructor(
    private service: ClientManagerService,
    private store: ClientManagerStore,
    private query: ClientManagerQuery
  ) {}
  canActivate(next: ActivatedRouteSnapshot) {
    const name = next.params.name;
    if (this.query.hasEntity(name)) {
      this.store.setActive(next.params.name);
      return true;
    } else {
      this.service.getAll();
      this.store.setActive(name);
      return true;
    }
  }

}
