import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RostersComponent } from './rosters/rosters.component';
import { RosterComponent } from './rosters/roster/roster.component';
import { CurrentWeekComponent } from './current-week/current-week.component';
import { FreeAgentsComponent } from './free-agents/free-agents.component';
import { LoginModalComponent } from './nav/login-modal/login-modal.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import Amplify from 'aws-amplify';
// import awsconfig from '../aws-exports';


// Amplify.configure(awsconfig);

@NgModule({
  declarations: [
    AppComponent,
    RosterComponent,
    RostersComponent,
    NavComponent,
    CurrentWeekComponent,
    FreeAgentsComponent,
    LoginModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDividerModule,
    MatSidenavModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
