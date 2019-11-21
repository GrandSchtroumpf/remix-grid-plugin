import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientManager, ClientManagerService, ClientManagerQuery } from '../+state';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  managers$ = this.query.selectAll();

  constructor(
    private service: ClientManagerService,
    private query: ClientManagerQuery
  ) {}

  ngOnInit() {
    this.service.getAll();
  }
}
