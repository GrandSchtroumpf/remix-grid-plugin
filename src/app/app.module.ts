import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {NgbModule, NgbTabsetModule, NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import { REMIX } from './remix';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import { ListComponent } from './client-manager/list/list.component';
import { ViewComponent } from './client-manager/view/view.component';
import { ClientManagerActiveGuard } from './client-manager/active.guard';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{
      path: '',
      component: ListComponent,
    }, {
      path: ':name',
      canActivate: [ClientManagerActiveGuard],
      component: ViewComponent
    }]),
    // UI
    NgbModule,
    NgbAccordionModule,
    NgbTabsetModule,
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(REMIX) private remix) {}
}
