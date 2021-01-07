import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../service/company.service';
import { CompanyInterface } from '../../data/interface/company.interface';
import { QuizInterface } from '../../data/interface/quiz.interface';
import { PositionService } from '../../service/position.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { inArrayPosition, PositionInterface } from '../../data/interface/position.interface';
import { distinct } from '../../util/functions';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GroupService } from '../../service/group.service';
import { EmployeeInterface } from '../../data/interface/employee.interface';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
    companyLoading = true;
    quizzesLoading = true;
    company!: CompanyInterface;
    quizzes: QuizInterface[] = [];
    positions: PositionInterface[] = [];
    user!: EmployeeInterface;

    groupForm!: FormGroup;
    positionForm!: FormGroup;

    constructor(
        private companyService: CompanyService,
        private modalService: NgbModal,
        private groupService: GroupService,
        private positionService: PositionService,
        private auth: AuthService
        ) {
        this.init();
    }

    init(): void {
        const id = 1;
        this.companyService.getCompany(id).subscribe(
            company => {
                this.company = company;
                // company.groups.forEach(
                //     gr => gr.employees.map(
                //         emp => this.positions.push(emp.position)
                //     )
                // );
                // this.positions = distinct<PositionInterface>(this.positions, inArrayPosition);
                this.positions = this.company.positions;
                this.companyLoading = false;
                this.createForms();
            }
        );
        this.companyService.getQuizzes(id).subscribe(
            quizzes => {
                this.quizzes = quizzes;
                this.quizzesLoading = false;
            }
        );
        // @ts-ignore
        this.auth.getUser().subscribe(res => this.user = res);
    }

    createForms(): void {
        this.groupForm = new FormGroup({
            title: new FormControl('', [
                Validators.required
            ])
        });

        this.positionForm = new FormGroup({
            title: new FormControl('', [
                Validators.required
            ])
        });
    }

    submitGroup(): void {
        this.groupService.save(this.groupForm.value.title, this.company.id.toString()).subscribe(
            res => {
                this.init();
                this.modalService.dismissAll();
            }
        );
    }

    submitPosition(): void {
        this.positionService.save(this.positionForm.value.title, this.company.id.toString()).subscribe(
            res => {
                this.init();
                this.modalService.dismissAll();
            }
        );
    }

    openModal(content: any): void {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }

    ngOnInit(): void {
    }

    getRandomInt(): number {
        return Math.floor(Math.random() * 20);
    }
}
