import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
empId: String;
  constructor(private router: Router) {
    this.empId = JSON.parse(localStorage.getItem('saveEmpId'));

   }

  ngOnInit() {
  }

  pickRide() {
    this.router.navigate(["pickRide"])
  }

  addNewRide() {
    this.router.navigate(["addNewRide"]);
  }
}
