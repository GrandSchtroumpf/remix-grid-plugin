import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ClientManagerQuery } from '../+state';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ViewComponent implements OnInit {
  manager$ = this.query.selectActive();

  constructor(private query: ClientManagerQuery) { }

  ngOnInit() {
  }

}
