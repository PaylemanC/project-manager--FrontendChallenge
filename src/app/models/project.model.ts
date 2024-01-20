

export interface Project {
  title: string;
  description: string;
  creationDate: Date;
  manager: string;
  assigned: string;
  status: 'enabled'| 'disabled';
}
