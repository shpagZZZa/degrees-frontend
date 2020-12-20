import { Component, Input, OnInit } from '@angular/core';
import { EmployeeInterface } from '../../data/interface/employee.interface';
import { EmployeeModel } from '../../data/model/employee.model';
import { EmployeeService } from '../../service/employee.service';
import { PositionService } from '../../service/position.service';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {

    @Input() employee!: EmployeeModel;

    constructor(public positionService: PositionService) {
    }

    ngOnInit(): void {
    }

}
