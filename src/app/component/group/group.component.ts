import { Component, OnInit } from '@angular/core';
import { GroupService } from '../../service/group.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { GroupInterface } from '../../data/interface/group.interface';
import { EmployeeInterface } from '../../data/interface/employee.interface';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PositionService } from '../../service/position.service';
import { PositionInterface } from '../../data/interface/position.interface';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent {

    loading = true;
    head!: EmployeeInterface | null;
    group!: GroupInterface;
    positions!: PositionInterface[];
    isAdmin = false;

    fullName = '';
    positionId!: number;

    constructor(
        private groupService: GroupService,
        private route: ActivatedRoute,
        public positionService: PositionService,
        private modalService: NgbModal,
        private employeeService: EmployeeService,
        private auth: AuthService
    ) {
        this.init();
    }

    submit(): void {
        this.modalService.dismissAll();
        this.employeeService.save({
            fullName: this.fullName,
            positionId: this.positionId,
            groupId: this.group.id
        }).subscribe(emp => this.init());
    }

    openModal(content: any): void {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }

    makeHead(emp: EmployeeInterface): void {
        this.groupService.setHead(this.group.id, emp.id).subscribe(
            gr => {
                this.group = gr;
                this.init();
            }
        );
    }

    init(): void {
        const groupId = parseInt(this.route.snapshot.paramMap.get('id') as string, 10);
        this.groupService.getGroup(groupId).subscribe(
            (group) => {
                this.group = group;
                this.head = this.group.head as EmployeeInterface | null;
                this.loading = false;
            }
        );
        this.positionService.getPositions().subscribe(
            positions => {
                this.positions = positions;
            }
        );
        this.auth.getUser().subscribe(
            res => {
                // @ts-ignore
                this.isAdmin = res.isAdmin;
            }
        );
    }
}
