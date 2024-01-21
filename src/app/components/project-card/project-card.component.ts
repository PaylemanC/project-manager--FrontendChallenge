import { Component, Input } from '@angular/core';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  showMenu = false;
  @Input() project: Project = {
    id: '',
    title: '',
    description: '',
    creationDate: new Date(),
    manager: '',
    assigned: '',
    status: 'enabled'
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
