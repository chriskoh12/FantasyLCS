import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Auth } from 'aws-amplify';
import { ISignUpResult, CognitoUser } from 'amazon-cognito-identity-js';
import { SignUpParams } from '@aws-amplify/auth/lib-esm/types/Auth';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(private notification: MatSnackBar) { }

  ngOnInit(): void {
  }

  // Make a call to AWS user pools attempting to sign in a user
  async signUp(): Promise<ISignUpResult> {
    console.log('username: ' + this.username);
    console.log('password: ' + this.password);
    const params: SignUpParams = {
      username: this.username,
      password: this.password,
      attributes: {
        email: this.email
      }
    };
    try {
      const user = await Auth.signUp(params);
      // console.log(user);
      this.openNotification('Sign up success! An email verification was sent to you.', 'Close');
      return user;
    } catch (error) {
      // add to cloudwatch?
      console.log('ERROR HAPPENED:', error);
      this.openNotification('Sign up failed. Please contact the developer.', 'Close');
    }
  }

  async signIn(): Promise<CognitoUser> {
    try {
      const user = await Auth.signIn(this.username, this.password);
      console.log(user);
      return user;
    } catch (error) {
      console.log('ERROR HAPPENED:', error);
      this.openNotification('Sign in failed. Please contact the developer.', 'Close');
    }
  }

  openNotification(message: string, actionLabel: string): void {
    this.notification.open(message, actionLabel, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
      });
  }

}
