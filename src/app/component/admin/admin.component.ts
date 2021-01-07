import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { EmployeeInterface } from '../../data/interface/employee.interface';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {

    user!: EmployeeInterface;
    employees: EmployeeInterface[] = [];

    constructor(public employeeService: EmployeeService, private auth: AuthService) {
        this.init();
    }

    init(): void {
        this.employeeService.getAll().subscribe(
            emps => {
                this.employees = emps;
            }
        );
        // @ts-ignore
        this.auth.getUser().subscribe(user => this.user = user);
    }

    setAdmin(emp: EmployeeInterface): void {
        this.employeeService.setAdmin(emp.id).subscribe(
            employee => {
                this.init();
            }
        );
    }
}
