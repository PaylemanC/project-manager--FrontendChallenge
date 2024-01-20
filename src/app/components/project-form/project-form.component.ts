import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent {
  projectForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    manager: [''],
    assigned: [''],
    status: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  addProject(event: Event): void {
    event.preventDefault();
    console.log("Validando...");
    if (this.projectForm.valid) {
      console.log("Enviando al servidor...");
      console.log(this.projectForm.value);
    } else {
      console.log("Error campos faltantes.");
      this.projectForm.markAllAsTouched();
    }
  }
}
