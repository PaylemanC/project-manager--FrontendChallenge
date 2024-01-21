import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-edit-project',
  template: `<app-subheader [title]="titleSubheader"></app-subheader>
  <div class="container--centered">
    <section class="project-form--container">
      <app-project-form [createMode]="false" [project]="project"></app-project-form>
    </section>
  </div>`,
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent {
  titleSubheader: string = 'Edit project';
  project: Project = {
    id: '',
    title: '',
    description: '',
    creationDate: new Date(),
    manager: '',
    assigned: '',
    status: 'enabled'
  }

  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const projectId = params['id'];
      this.project = this.projectService.getProjectById(projectId) || this.project;
    });
  }
}
