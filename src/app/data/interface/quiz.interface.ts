import { EmployeeInterface } from './employee.interface';

export interface QuizInterface {
    id: number;
    employee: EmployeeInterface;
    title: string;
    subtitle: string;
}
