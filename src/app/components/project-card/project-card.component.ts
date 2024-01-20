import { Component } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
