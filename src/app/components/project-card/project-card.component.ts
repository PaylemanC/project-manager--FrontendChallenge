import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  showMenu = false;
  showConfirmationModal = false;
  @Input() project: Project = {
    id: '',
    title: '',
    description: '',
    creationDate: new Date(),
    manager: '',
    assigned: '',
    status: 'enabled'
  }

  constructor(private projectService: ProjectService) {}

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  confirmDelete() {
    this.showConfirmationModal = true;
    this.showMenu = false;
  }

  cancelDelete() {
    this.showConfirmationModal = false;
  }

  deleteProject() {
    this.projectService.deleteProject(this.project.id);
    this.showConfirmationModal = false;
  }
}
