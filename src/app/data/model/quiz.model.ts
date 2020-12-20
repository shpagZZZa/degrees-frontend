export interface QuizModel {
    id: number;
    employee_id: number;
    title: string;
    subtitle: string;
    unique_answers: boolean;
    possible_answers: AnswerInterface[];
}

export interface AnswerInterface {
    mark: number;
    title: string;
}
