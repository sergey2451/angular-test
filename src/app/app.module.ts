import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { IncomeComponent } from './components/income/income.component';
import { OutcomeComponent } from './components/outcome/outcome.component';
import { LoansComponent } from './components/loans/loans.component';
import { InvestmentsComponent } from './components/investments/investments.component';
import { SummaryComponent } from './components/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: SummaryComponent
  },
  {
    path: 'navigator',
    component: NavigatorComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigatorComponent,
    IncomeComponent,
    OutcomeComponent,
    LoansComponent,
    InvestmentsComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
