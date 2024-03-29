import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { SubheaderComponent } from './components/subheader/subheader.component';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    SubheaderComponent,
    ProjectsListComponent,
    NewProjectComponent,
    ProjectFormComponent,
    ProjectCardComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
