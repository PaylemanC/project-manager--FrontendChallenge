import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-project',
  template: `<app-subheader [title]="titleSubheader"></app-subheader>
  <div class="project-form--container">
    <app-project-form [createMode]="false"></app-project-form>
  </div>`,
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent {
  titleSubheader: string = 'Edit project';
}
