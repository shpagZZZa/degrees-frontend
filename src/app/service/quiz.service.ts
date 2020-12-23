import { Injectable } from '@angular/core';
import { QuizInterface } from '../data/interface/quiz.interface';
import { AnswerInterface, QuizModel } from '../data/model/quiz.model';
import { EmployeeService } from './employee.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
    private quizzes: QuizModel[] = [
        {
            id: 1,
            employee_id: 1,
            title: 'Опрос 1',
            subtitle: 'описание',
            unique_answers: false,
            possible_answers: [
                {
                    mark: 0,
                    title: 'нет'
                },
                {
                    mark: 1,
                    title: 'скорее нет чем да'
                },
                {
                    mark: 2,
                    title: 'не знаю'
                },
                {
                    mark: 3,
                    title: 'скорее да чем нет'
                },
                {
                    mark: 4,
                    title: 'да'
                }
            ]

        },
        {
            id: 2,
            employee_id: 2,
            title: 'Опрос 2',
            subtitle: 'описание',
            unique_answers: false,
            possible_answers: [
                {
                    mark: 0,
                    title: 'нет'
                },
                {
                    mark: 1,
                    title: 'скорее нет чем да'
                },
                {
                    mark: 2,
                    title: 'не знаю'
                },
                {
                    mark: 3,
                    title: 'скорее да чем нет'
                },
                {
                    mark: 4,
                    title: 'да'
                }
            ]
        },
        {
            id: 3,
            employee_id: 3,
            title: 'Опрос 3',
            subtitle: 'описание',
            unique_answers: true,
            possible_answers: [
                {
                    mark: 0,
                    title: 'да',
                },
                {
                    mark: 1,
                    title: 'нет',
                },
                {
                    mark: 2,
                    title: 'нет',
                },
            ]
        }
    ];

    public getQuizzes(companyId: number): QuizModel[] {
        return this.quizzes;
    }

    public getQuiz(id: number): QuizModel {
        return this.quizzes.filter(q => q.id === id)[0];
    }

    public getDefaultAnswers(): AnswerInterface[] {
        return [
            {
                mark: 0,
                title: 'нет'
            },
            {
                mark: 1,
                title: 'скорее нет чем да'
            },
            {
                mark: 2,
                title: 'не знаю'
            },
            {
                mark: 3,
                title: 'скорее да чем нет'
            },
            {
                mark: 4,
                title: 'да'
            }
        ];
    }
}
