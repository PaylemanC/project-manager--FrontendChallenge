import { Component } from '@angular/core';

@Component({
  selector: 'app-new-project',
  template: `<app-subheader [title]="titleSubheader"></app-subheader>
  <div class="container--centered">
    <section class="project-form--container">
      <app-project-form></app-project-form>
    </section>
  </div>`,
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent {
  titleSubheader: string = 'Add project';
}
