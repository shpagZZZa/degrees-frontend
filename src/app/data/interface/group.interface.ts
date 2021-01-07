import { CompanyInterface } from './company.interface';
import { EmployeeInterface } from './employee.interface';

export interface GroupInterface {
  id: number;
  head?: EmployeeInterface;
  title: string;
  employees: EmployeeInterface[];
}
