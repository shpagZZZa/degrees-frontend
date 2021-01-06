import { EmployeeInterface } from './employee.interface';

export interface QuizInterface {
    id: number;
    employee: EmployeeInterface;
    feedbacks: FeedbackInterface[];
    answers: AnswerInterface[];
    title: string;
    subtitle: string;
    createdAt: string;
}

export interface FeedbackInterface {
    id: number;
    answer: AnswerInterface;
    comment: string;
    author: EmployeeInterface;
}

export interface AnswerInterface {
    id: number;
    title: string;
}

export interface NewFeedbackInterface {
    answer: AnswerInterface;
    comment: string;
    author: EmployeeInterface;
}
