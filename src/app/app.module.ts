import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SubheaderComponent,
    ProjectsListComponent,
    NewProjectComponent,
    ProjectFormComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
