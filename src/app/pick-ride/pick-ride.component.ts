import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-pick-ride',
  templateUrl: './pick-ride.component.html',
  styleUrls: ['./pick-ride.component.css']
})
export class PickRideComponent implements OnInit {

  rideList: any;
  riderArray: any;
  rideArrayLength: number;
  rideBooked: boolean = false;
  displayedColumns: string[] = ['empId', 'vehicle', 'vehicleNumber', 'vacantSeats', 'time', 'pickup', 'destination', 'pickRideBtn'];

  constructor(private snakeBar: MatSnackBar) { }

  ngOnInit() {
    this.riderArray = JSON.parse(localStorage.getItem('saveRide'));
    let empId = JSON.parse(localStorage.getItem('saveEmpId'));
    this.rideList = this.riderArray.filter(s => s.empId != empId);

    for(let i=0; i<this.rideList.length; i++) {
      let time = this.rideList[i].time;
      let a = time.split(':');
      let maxTime = (+a[0]) * 60 * 60 + (+a[1]) * 60 + 3600;
      let minTime = (+a[0]) * 60 * 60 + (+a[1]) * 60 - 3600;
      console.log(maxTime, minTime);
    }

    this.rideArrayLength = this.rideList.length;
    console.log(this.rideList);
  }

  select(data) {
    console.log(data);
    for(let i=0; i<this.rideList.length; i++) {
      if (this.rideList[i].empId === data.empId) {
        this.rideList[i].vacantSeats-- ;
        this.snakeBar.open('', 'Ride Booked Successfully', {
          duration: 2000,
        })
        this.rideBooked = true;
      }
    }
    
  }
}
