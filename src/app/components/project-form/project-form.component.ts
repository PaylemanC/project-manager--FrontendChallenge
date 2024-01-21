import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';

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

  constructor(private formBuilder: FormBuilder, private projectService: ProjectService) { }

  onSubmit(event: Event): void {
    event.preventDefault();
    console.log("Validando...");
    if (this.projectForm.valid) {
      console.log("Enviando al servidor...");
      const newProject: Project = {
        title: this.projectForm.value.title!,
        description: this.projectForm.value.description!,
        creationDate: new Date(),
        manager: this.projectForm.value.manager!,
        assigned: this.projectForm.value.assigned!,
        status: this.projectForm.value.status as 'enabled' | 'disabled'
      }
      this.projectService.addProject(newProject);
      console.log('Enviado');
    } else {
      console.log("Error campos faltantes.");
      this.projectForm.markAllAsTouched();
    }
  }
}
