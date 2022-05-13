import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AboutmeEditComponent } from './components/new-item-components/aboutme-edit/aboutme-edit.component';
import { NewEducationFormComponent } from './components/new-item-components/new-education-form/new-education-form.component';
import { NewProyectFormComponent } from './components/new-item-components/new-proyect-form/new-proyect-form.component';
import { NewSkillFormComponent } from './components/new-item-components/new-skill-form/new-skill-form.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
const routes: Routes = [
  { path: 'aboutaddedit', component: AboutmeEditComponent },
  { path: 'educationaddedit', component: NewEducationFormComponent },
  { path: 'proyectaddedit', component: NewProyectFormComponent },
  { path: 'skilladdedit', component: NewSkillFormComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: '', component: LoginFormComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponent = [LoginFormComponent, PortfolioComponent];
