import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SummaryComponent } from './pages/summary/summary.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { WorkExperienceComponent } from './pages/work-experience/work-experience.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InternshipsComponent } from './pages/internships/internships.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SummaryComponent,
    AboutComponent,
    SkillsComponent,
    WorkExperienceComponent,
    InternshipsComponent,
    ProjectsComponent,
    ContactMeComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule ,
    AppRoutingModule,
    NgbModule ,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
