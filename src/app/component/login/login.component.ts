import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

    form!: FormGroup;
    error = false;
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.createForm();
    }

    createForm(): void {
        this.form = new FormGroup({
            accessCode: new FormControl('', [
                Validators.required,
                Validators.maxLength(6)
            ])
        });
    }

    submit(): void {
        this.authService.login(this.form.value.accessCode).subscribe(
            res => {
                // @ts-ignore
                this.authService.setAccessCode(res.accessCode as number);
                // @ts-ignore
                this.authService.setIsAdmin(res.isAdmin as boolean);
                this.router.navigateByUrl('/company');
            }, error => {
                this.error = true;
            }
        );
    }
}
