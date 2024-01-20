import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projects: Project[] = [];

  constructor() { }

  getProjects(): Project[] {
    const storedProjects = localStorage.getItem('projects');
    return storedProjects ? JSON.parse(storedProjects) : [];
  }

  addProject(newProject: Project): void {
    this.projects = this.getProjects();
    this.projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }
}
