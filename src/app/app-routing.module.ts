import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';

const routes: Routes = [
  { path: '', component: ProjectsListComponent },
  { path: 'new-project', component: NewProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
