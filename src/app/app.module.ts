import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule,MatExpansionModule,MatSnackBarModule,MatTableModule,MatPaginatorModule,MatStepperModule,MatSelectModule, MatProgressSpinnerModule, MatInputModule,MatMenuModule,MatCardModule, MatGridListModule,MatIconModule, MatToolbarModule, MatButtonModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { AddRidesComponent } from './add-rides/add-rides.component';
import { PickRideComponent } from './pick-ride/pick-ride.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    SignupComponent,
    AddRidesComponent,
    PickRideComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    
    NgxMaterialTimepickerModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatStepperModule,
    MatExpansionModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
