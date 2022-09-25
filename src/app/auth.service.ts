import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Auth } from 'aws-amplify';
import { ISignUpResult, CognitoUser } from 'amazon-cognito-identity-js';
import { SignUpParams } from '@aws-amplify/auth/lib-esm/types/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // Make a call to AWS user pools attempting to sign up a user
  signUp(username: string, password: string, email: string): Observable<ISignUpResult> {
    console.log('attempting to sign up with username: %s and password: %s and email: %s', username, password, email);
    // construct params to pass to AWS auth signup function
    const params: SignUpParams = {
      username,
      password,
      attributes: {
        email
      }
    };
    return from(Auth.signUp(params))
      .pipe(
        catchError(this.handleError<ISignUpResult>('signUp'))
      );
  }

  // Make a call to AWS user pools attempting to sign in a user
  signIn(username: string, password: string): Promise<CognitoUser> {
    return Auth.signIn(username, password);
    // return from(Auth.signIn(username, password))
    //   .pipe(
    //     catchError(this.handleError<CognitoUser>('signIn'))
    //   );
  }

  // create a function based on what type of observable is needed from that service call
  handleError<T>(operation: string) {
    return (error: any): Observable<T> => {
      // log to cloudwatch maybe?
      console.log('ERROR in %s: ', operation, error);
      return of(null);
    };
  }
}
