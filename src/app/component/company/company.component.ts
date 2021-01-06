import { Component, OnInit } from '@angular/core';
import { CompanyService } from '../../service/company.service';
import { CompanyInterface } from '../../data/interface/company.interface';
import { QuizInterface } from '../../data/interface/quiz.interface';

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

    constructor(
        private companyService: CompanyService,
        ) {
        const id = 1;
        this.companyService.getCompany(id).subscribe(
            company => {
                this.company = company;
                this.companyLoading = false;
            }
        );
        this.companyService.getQuizzes(id).subscribe(
            quizzes => {
                this.quizzes = quizzes;
                this.quizzesLoading = false;
            }
        );
    }

    ngOnInit(): void {
    }

    getRandomInt(): number {
        return Math.floor(Math.random() * 20);
    }
}
