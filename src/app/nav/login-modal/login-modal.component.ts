import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth.service';
import { ISignUpResult, CognitoUser } from 'amazon-cognito-identity-js';
// import * as AWS from 'aws-sdk';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  // @Output() userSignUp = new EventEmitter<PlayerMoveEvent>();
  username: string;
  password: string;
  email: string;
  login: boolean = true;

  user: CognitoUser;

  constructor(private notification: MatSnackBar, private authService: AuthService) { }

  ngOnInit(): void {
  }

  authSignIn(): void {
    this.authService.signIn(this.username, this.password)
      .then( signInResult => this.user = signInResult);
      setTimeout(() => console.log(this.user), 2000);
  }

  authSignUp(): void {
    this.authService.signUp(this.username, this.password, this.email);
  }

  openNotification(message: string, actionLabel: string): void {
    this.notification.open(message, actionLabel, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
      });
  }

}
