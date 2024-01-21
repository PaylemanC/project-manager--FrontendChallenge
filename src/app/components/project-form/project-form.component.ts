import { Component, Input, SimpleChanges } from '@angular/core';
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
  @Input() project: Project = {
    id: '',
    title: '',
    description: '',
    creationDate: new Date(),
    manager: '',
    assigned: '',
    status: 'enabled'
  };

  constructor(private formBuilder: FormBuilder, private projectService: ProjectService, private router: Router) { }

  personSelected(control: AbstractControl): ValidationErrors | null {
    const selectedPerson = control.value;
    if (!selectedPerson || selectedPerson === 'Select a person') {
      return { personNotSelected: true };
    }
    return null;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['project'] && this.project) {
      this.projectForm.patchValue({
        title: this.project.title,
        description: this.project.description,
        manager: this.project.manager,
        assigned: this.project.assigned,
        status: this.project.status,
      });
    }
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
    const updatedProject: Project = {
      ...this.project,
      ...this.projectForm.value,
      title: this.projectForm.value.title ?? '',
      description: this.projectForm.value.description ?? '',
      manager: this.projectForm.value.manager ?? '',
      assigned: this.projectForm.value.assigned ?? '',
      status: this.projectForm.value.status === 'enabled' || this.projectForm.value.status === 'disabled'
      ? this.projectForm.value.status : 'enabled'
    };
    this.projectService.updateProject(updatedProject);
    this.router.navigate(['/']);
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
