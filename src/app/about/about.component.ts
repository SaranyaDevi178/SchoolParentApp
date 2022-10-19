import { Component, OnInit } from '@angular/core';
import { FeesDetails } from '../fees-details';
import { Holidaydetails } from '../holidaydetails';
import { SchoolParentService } from '../school-parent-service';
import { Router,RouterModule} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  feesdetail: FeesDetails[]=[];
  fees:FeesDetails={
    id: 0,
    class: '',
    feesStructure:''
  }
  holidayDetails: Holidaydetails[]=[];
  holiday:Holidaydetails={
    id: 0,
    holidayDate: new Date,
    holidayReason:''
  }
  constructor(public service:SchoolParentService,public routers:Router) { }

  ngOnInit(): void {
    this.getAllFeesDetails();
    this.getAllHolidayDetails(); 

  }

  getAllFeesDetails() {
    this.service.getAllFeesDetails()
    .subscribe(
      response => { this.feesdetail = response}
    );
  }

  getAllHolidayDetails() {
    this.service.getAllHolidayDetails()
    .subscribe(
      response => { this.holidayDetails = response}
    );
  }

}
