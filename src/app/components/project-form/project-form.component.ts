import { Component, Input } from '@angular/core';
import { FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';
import { Router } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

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
  @Input() createMode: boolean = true;

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
    if (!this.projectForm.valid) {
      this.projectForm.markAllAsTouched();
      return;
    }

    if (this.createMode) {
      this.createProject();
    } else {
      this.editProject();
    }
  }

  private createProject() {
    const newProject: Project = {
      id: uuidv4(),
      title: this.projectForm.value.title!,
      description: this.projectForm.value.description!,
      creationDate: new Date(),
      manager: this.projectForm.value.manager!,
      assigned: this.projectForm.value.assigned!,
      status: this.projectForm.value.status as 'enabled' | 'disabled'
    }
    this.projectService.addProject(newProject);
    this.router.navigate(['/']);
  }

  private editProject() {
    console.log('Editando...');
  }

  get title() {
    return this.projectForm.get('title');
  }

  get description() {
    return this.projectForm.get('description');
  }

  get manager() {
    return this.projectForm.get('manager');
  }

  get assigned() {
    return this.projectForm.get('assigned');
  }

  get status() {
    return this.projectForm.get('status');
  }
}
