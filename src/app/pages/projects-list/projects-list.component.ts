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
  searchTerm: string = '';
  pages: number = 1;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.projectService.projects$.subscribe((projects) => {
      this.projects = projects.sort((a, b) => {
        const dateA = new Date(a.creationDate).getTime();
        const dateB = new Date(b.creationDate).getTime();
        return dateB - dateA;
      });
    });
  }

  get filteredProjects(): Project[] {
    return this.projects.filter(project =>
      project.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
