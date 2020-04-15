import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RosterComponent } from './roster/roster.component';


const routes: Routes = [
  { path: '', redirectTo: '/roster', pathMatch: 'full' },
  { path: 'roster', component: RosterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
