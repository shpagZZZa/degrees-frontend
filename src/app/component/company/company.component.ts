import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../service/company.service';
import { CompanyInterface } from '../../data/interface/company.interface';
import { GroupInterface } from '../../data/interface/group.interface';
import { GroupService } from '../../service/group.service';
import { GroupModel } from '../../data/model/group.model';
import { QuizModel } from '../../data/model/quiz.model';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
    company: CompanyInterface;
    groups: GroupModel[];
    quizzes: QuizModel[];

    constructor(
        private companyService: CompanyService,
        private groupService: GroupService,
        quizService: QuizService
        ) {
        const id = 1;
        this.company =  this.companyService.getCompany(id);
        this.groups = this.groupService.getGroups(id);
        this.quizzes = quizService.getQuizzes(id);
    }

    ngOnInit(): void {
    }
}
