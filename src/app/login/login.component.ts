import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  empId: string;
  password: string;
  showSpinner: boolean = false;

  ngOnInit() {
  }

  login() {
  localStorage.saveEmpId = JSON.stringify(this.empId);
      this.router.navigate(["addNewRide"]);
  }

  signup() {
    this.router.navigate(["signup"]);
  }

}
