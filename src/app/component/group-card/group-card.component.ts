import { Component, Input, OnInit } from '@angular/core';
import { GroupInterface } from '../../data/interface/group.interface';
import { EmployeeService } from '../../service/employee.service';
import { GroupModel } from '../../data/model/group.model';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.scss']
})
export class GroupCardComponent implements OnInit {

    @Input() group!: GroupModel;

    constructor(public employeeService: EmployeeService) { }

    ngOnInit(): void {
    }

}
