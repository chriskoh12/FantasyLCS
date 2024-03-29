import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/auth.service';
import { ISignUpResult, CognitoUser } from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  password: string = "";
  email: string = "";
  login: boolean = true;

  user: CognitoUser;

  constructor(private notification: MatSnackBar, private authService: AuthService) { }

  ngOnInit(): void {
  }

  authSignIn(): void {
    this.authService.signIn(this.email, this.password)
      .then( signInResult => {
        this.user = signInResult;
        console.log(this.user);
        this.openNotification("Signed In successfully!");
      })
      .catch( err => {
        console.log("sign in error: ", err )
        this.openNotification("Incorrect username or password");
      });
  }

  authSignUp(): void {
    this.authService.signUp(this.email, this.email, this.password)
      .then( () => this.openNotification("Signed Up successfully!"))
      .catch( err => {
        console.log(err)
        this.openNotification(`Sign Up unsuccessful. Reason: ${err}`)
      });
  }

  openNotification(message: string, duration: number = 3000, actionLabel: string = ""): void {
    this.notification.open(message, actionLabel, {
      duration: duration,
      horizontalPosition: 'center',
      verticalPosition: 'top'
      });
  }

}
