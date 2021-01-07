import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PositionService } from '../../service/position.service';
import { EmployeeInterface } from '../../data/interface/employee.interface';

@Component({
  selector: 'app-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.scss']
})
export class EmployeeCardComponent implements OnInit {
    @Input() action: string | null = null;
    @Input() employee!: EmployeeInterface;
    @Output() actionEvent = new EventEmitter<EmployeeInterface>();

    getSubtitle(): string {
        return this.employee.isAdmin ? this.employee.position.title + ' - администратор' : this.employee.position.title;
    }

    ngOnInit(): void {
    }
}
