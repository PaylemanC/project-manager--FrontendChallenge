import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent {
  projectForm = this.formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    manager: ['', this.personSelected],
    assigned: ['', this.personSelected],
    status: ['enabled']
  });

  constructor(private formBuilder: FormBuilder, private projectService: ProjectService, private router: Router) { }

  personSelected(control: AbstractControl): ValidationErrors | null {
    const selectedPerson = control.value;
    if (!selectedPerson || selectedPerson === 'Select a person') {
      return { personNotSelected: true };
    }
    return null;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.projectForm.valid) {
      const newProject: Project = {
        title: this.projectForm.value.title!,
        description: this.projectForm.value.description!,
        creationDate: new Date(),
        manager: this.projectForm.value.manager!,
        assigned: this.projectForm.value.assigned!,
        status: this.projectForm.value.status as 'enabled' | 'disabled'
      }
      this.projectService.addProject(newProject);
      this.router.navigate(['/']);
    } else {
      this.projectForm.markAllAsTouched();
    }
  }
}