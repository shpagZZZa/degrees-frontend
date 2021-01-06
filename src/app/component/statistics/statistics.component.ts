import { Component, OnInit } from '@angular/core';
import { AnswerInterface, QuizInterface } from '../../data/interface/quiz.interface';
import { CompanyService } from '../../service/company.service';
import { CompanyInterface } from '../../data/interface/company.interface';
import { GroupInterface } from '../../data/interface/group.interface';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {

    company!: CompanyInterface;
    quizzes!: QuizInterface[];
    loading = true;

    constructor(private companyService: CompanyService) {
        const id = 1;
        companyService.getCompany(id).subscribe(
            comp => {
                this.company = comp;
            }
        );
        companyService.getQuizzes(id).subscribe(
            quizzes => {
                this.quizzes = quizzes;
                this.loading = false;
            }
        );
    }

    getQuizzesByGroup(gr: GroupInterface): QuizInterface[] {
        const res: QuizInterface[] = [];
        this.quizzes.forEach(q => {
            if (q.employee.group.id === gr.id) {
                res.push(q);
            }
        });
        return res;
    }

    getFeedbacksCount(quiz: QuizInterface, answer: AnswerInterface): number {
        let res = 0;
        quiz.feedbacks.forEach(
            f => {
                if (f.answer.id === answer.id) {
                    res++;
                }
            }
        );
        return res;
    }
}
