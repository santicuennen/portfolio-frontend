import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
const routes: Routes = [
  { path: 'registro', component: NewUserFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [LoginFormComponent, PortfolioComponent];
