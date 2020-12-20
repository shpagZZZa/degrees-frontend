import { CompanyInterface } from './company.interface';
import { EmployeeInterface } from './employee.interface';

export interface GroupExtendedInterface {
    id: number;
    company: CompanyInterface;
    parent?: GroupExtendedInterface | null;
    head: EmployeeInterface;
    title: string;
}
