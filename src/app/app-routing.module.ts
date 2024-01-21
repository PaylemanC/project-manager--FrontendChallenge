import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListComponent } from './pages/projects-list/projects-list.component';
import { NewProjectComponent } from './pages/new-project/new-project.component';
import { EditProjectComponent } from './pages/edit-project/edit-project.component';

const routes: Routes = [
  { path: '', component: ProjectsListComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'new-project', component: NewProjectComponent },
  { path: 'edit-project/:id', component: EditProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
