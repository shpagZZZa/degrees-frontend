import { Injectable } from '@angular/core';
import { EmployeeInterface } from '../data/interface/employee.interface';
import { EmployeeModel } from '../data/model/employee.model';
import { PositionService } from './position.service';
import { GroupService } from './group.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
    private employees: EmployeeModel[] = [
        {
            id: 1,
            full_name: 'имя 1',
            position_id: 1,
            group_id: 1
        },
        {
            id: 2,
            full_name: 'имя 2',
            position_id: 2,
            group_id: 1
        },
        {
            id: 3,
            full_name: 'Анатолий',
            position_id: 3,
            group_id: 2
        },
        {
            id: 4,
            full_name: 'Марина',
            position_id: 4,
            group_id: 2
        },
        {
            id: 5,
            full_name: 'имя 5',
            position_id: 5,
            group_id: 3
        },
        {
            id: 6,
            full_name: 'имя 6',
            position_id: 6,
            group_id: 3
        },
        {
            id: 7,
            full_name: 'имя 7',
            position_id: 7,
            group_id: 4
        },
        {
            id: 8,
            full_name: 'имя 8',
            position_id: 8,
            group_id: 4
        }
    ];

    public getEmployee(id: number): EmployeeModel {
        return  this.employees.filter(e => e.id === id)[0];
    }

    public getEmployeesByGroup(id: number): EmployeeModel[] {
        return this.employees.filter(e => e.group_id === id);
    }
}
