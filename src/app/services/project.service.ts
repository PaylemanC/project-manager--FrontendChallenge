import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectsSubject = new BehaviorSubject<Project[]>([]);
  projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  constructor() { }

  getProjects(): Project[] {
    return this.projectsSubject.getValue();
  }

  addProject(newProject: Project): void {
    const currentProjects = this.getProjects();
    const updatedProjects = [...currentProjects, newProject];
    this.projectsSubject.next(updatedProjects);
    localStorage.setItem('projects', JSON.stringify(updatedProjects));
  }    
}
