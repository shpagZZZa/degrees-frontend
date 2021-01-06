import { Injectable } from '@angular/core';
import { AnswerInterface, FeedbackInterface, NewFeedbackInterface, QuizInterface } from '../data/interface/quiz.interface';
import { Observable } from 'rxjs';
import { BackendService, SuccessMessageInterface } from './backend.service';

export interface NewQuizInterface {
    title: string;
    subtitle: string;
    employeeId: number;
    defaultAnswers: boolean;
    answers?: AnswerInterface[];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService extends BackendService {
    public getQuiz(id: number): Observable<QuizInterface> {
        return this.http.get<QuizInterface>(this.backendUrl + '/api/quiz/' + id);
    }

    public leaveFeedback(quizId: number, feedback: NewFeedbackInterface): Observable<FeedbackInterface> {
        return this.http.post<FeedbackInterface>(this.backendUrl + '/api/quiz/' + quizId, {
            feedback
        });
    }

    public isAnswered(quizId: number): Observable<SuccessMessageInterface> {
        return this.http.get<SuccessMessageInterface>(this.backendUrl + '/api/quiz/' + quizId + '/check-answered', {
            headers: this.getAuthHeaders()
        });
    }

    public getDefaultAnswers(): Observable<AnswerInterface[]> {
        return this.http.get<AnswerInterface[]>(this.backendUrl + '/api/answer/default');
    }

    public newQuiz(data: NewQuizInterface): Observable<QuizInterface> {
        return this.http.post<QuizInterface>(this.backendUrl + '/api/quiz', data);
    }
}
