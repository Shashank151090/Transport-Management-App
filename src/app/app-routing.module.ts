import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { AddRidesComponent } from './add-rides/add-rides.component';
import { PickRideComponent } from './pick-ride/pick-ride.component';


const routes: Routes = [
  {path: "", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "signup", component: SignupComponent},
  {path: "addNewRide", component: AddRidesComponent},
  {path: "pickRide", component: PickRideComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
