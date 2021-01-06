import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

export interface SuccessMessageInterface {
    success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class BackendService {

    protected backendUrl = 'http://localhost:8000';
    constructor(protected http: HttpClient, protected authService: AuthService) { }

    protected getAuthHeaders(): HttpHeaders {
        return new HttpHeaders().set('access-code', this.authService.getAccessCode().toString());
    }
}
