import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { EmployeeInterface } from './data/interface/employee.interface';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'degrees-frontend';
    user!: EmployeeInterface;

    constructor(public auth: AuthService) {
        auth.getUser().subscribe(
            res => {
                // @ts-ignore
                this.user = res;
            }
        );
    }
}
