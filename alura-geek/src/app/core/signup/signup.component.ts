import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  formSignup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.formSignup = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
    });
  }

  get formControls() {
    return this.formSignup.controls;
  }

  login() {
    if (this.formSignup.valid) {
      const email = this.formControls['email'].value;
      const password = this.formControls['senha'].value;

      this.authService
        .authenticate(email, password)
        .pipe(
          catchError((err) => {
            this.toastr.error('E-mail ou senha inválidos');
            console.log(err);
            return throwError(
              () =>
                new Error(
                  'Erro no Login: ' + err.status + '- ' + err.statusText
                )
            );
          })
        )
        .subscribe(() => {
          this.toastr.success('Usuário Autenticado');
          this.router.navigate(['home']);
        });
    } else {
      this.formSignup.markAllAsTouched();
    }
  }
}
