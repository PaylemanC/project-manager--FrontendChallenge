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
  filteredProjects: Project[] = [];
  searchTerm: string = '';

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.projects$.subscribe((projects) => {
      this.projects = projects.sort((a, b) => {
        const dateA = new Date(a.creationDate).getTime();
        const dateB = new Date(b.creationDate).getTime();
        return dateB - dateA;
      });
    });
    this.filterProjects();
  }

  filterProjects() {
    if (this.searchTerm.trim() === '') {
      this.filteredProjects = [...this.projects];
    } else {
      this.filteredProjects = this.projects.filter(project =>
        project.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
