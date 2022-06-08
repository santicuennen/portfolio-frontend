import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './components/education/education.component';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApLogoComponent } from './components/nav/ap-logo/ap-logo.component';
import { MediaLinksComponent } from './components/nav/media-links/media-links.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NewUserFormComponent } from './components/new-user-form/new-user-form.component';
import { ToastrModule } from 'ngx-toastr';
import { interceptorProvider } from './interceptor/portfolio-intercerptor.service';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ProfileComponent,
    AboutMeComponent,
    SkillsComponent,
    ProyectsComponent,
    EducationComponent,
    routingComponent,
    PortfolioComponent,
    ApLogoComponent,
    MediaLinksComponent,
    NewUserFormComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MatProgressBarModule,
    ToastrModule.forRoot(),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
