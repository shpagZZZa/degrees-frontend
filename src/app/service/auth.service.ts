import { Injectable } from '@angular/core';
import { EmployeeInterface } from '../data/interface/employee.interface';
import { BackendService, SuccessMessageInterface } from './backend.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

export interface AuthResult {
    accessCode: number;
    isAdmin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private authCookieName = '_accessCode';

    constructor(private http: HttpClient, private cookieService: CookieService, private router: Router) {
    }

    public getUser(): Observable<HttpResponse<EmployeeInterface>> {
        return this.http.post<HttpResponse<EmployeeInterface>>(`${environment.apiUrl}` + '/auth/get-user', {
            accessCode: this.getAccessCode()
        });
    }

    public login(accessCode: string): Observable<HttpResponse<AuthResult>> {
        return this.http.post<HttpResponse<AuthResult>>(`${environment.apiUrl}/auth/login`, {
            accessCode
        });
    }

    public getAccessCode(): number {
        return parseInt(this.cookieService.get(this.authCookieName), 10);
    }

    public setIsAdmin(isAdmin: boolean): void {
        this.cookieService.set('isAdmin', isAdmin ? '1' : '0');
    }

    public setAccessCode(accessCode: number): void {
        this.cookieService.set(this.authCookieName, accessCode.toString());
    }

    public isCookieSet(): boolean {
        return this.cookieService.check(this.authCookieName);
    }

    public logout(): void {
        this.cookieService.delete(this.authCookieName);
        this.router.navigateByUrl('/login');
    }
}
