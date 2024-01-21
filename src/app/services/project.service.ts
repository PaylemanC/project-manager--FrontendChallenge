import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../models/project.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsSubject = new BehaviorSubject<Project[]>([]);
  projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  constructor() {
    this.getStoredProjects();
  }

  private getStoredProjects() {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      this.projectsSubject.next(JSON.parse(storedProjects));
    } else {
      const defaultProjects: Project[] = [
        {
          id: uuidv4(),
          title: 'Landing page',
          description: 'Some description.',
          creationDate: new Date(),
          manager: 'Walt Cosani',
          assigned: 'Ignacio Truffa',
          status: 'enabled'
        },
        {
          id: uuidv4(),
          title: 'E-Commerce Shop',
          description: 'Some description.',
          creationDate: new Date(),
          manager: 'Walt Cosani',
          assigned: 'Ignacio Truffa',
          status: 'enabled'
        },
        {
          id: uuidv4(),
          title: 'CRM Linkroom',
          description: 'Some description.',
          creationDate: new Date(),
          manager: 'Walt Cosani',
          assigned: 'Ignacio Truffa',
          status: 'enabled'
        }
      ];
      this.projectsSubject.next(defaultProjects);
      this.saveProjectsToStorage(defaultProjects);
    }
  }

  private saveProjectsToStorage(projects: Project[]) {
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  getProjects(): Project[] {
    return this.projectsSubject.getValue();
  }

  getProjectById(projectId: string) {
    const projects = this.getProjects();
    return projects.find((project) => project.id === projectId);
  }

  addProject(newProject: Project) {
    const currentProjects = this.getProjects();
    const updatedProjects = [...currentProjects, newProject];
    this.projectsSubject.next(updatedProjects);
    this.saveProjectsToStorage(updatedProjects);
  }

  deleteProject(projectId: string) {
    const currentProjects = this.getProjects();
    const updatedProjects = currentProjects.filter(project => project.id !== projectId);
    this.projectsSubject.next(updatedProjects);
    this.saveProjectsToStorage(updatedProjects);
  }

  updateProject(updatedProject: Project) {
    const currentProjects = this.getProjects();
    const updatedProjects = currentProjects.map((project) =>
      project.id === updatedProject.id ? { ...project, ...updatedProject } : project
    );
    this.projectsSubject.next(updatedProjects);
    this.saveProjectsToStorage(updatedProjects);
  }
}
