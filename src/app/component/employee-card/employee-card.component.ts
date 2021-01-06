import { Component, Input, OnInit } from '@angular/core';
import { PositionService } from '../../service/position.service';
import { EmployeeInterface } from '../../data/interface/employee.interface';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
    @Input() employee!: EmployeeInterface;

    ngOnInit(): void {
    }
}
