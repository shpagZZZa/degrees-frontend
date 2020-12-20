import { CompanyInterface } from './company.interface';
import { EmployeeInterface } from './employee.interface';

export interface GroupInterface {
  id: number;
  company: CompanyInterface;
  parent?: GroupInterface | null;
  head: EmployeeInterface;
  title: string;
}
