import { Component } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})
export class ProjectsListComponent {
  projects: Project[] = []

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.projects$.subscribe((projects) => {
      this.projects = projects;
    });
  }
}
