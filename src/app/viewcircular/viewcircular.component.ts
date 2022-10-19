import { Component, OnInit } from '@angular/core';
import { SchoolParentService } from '../school-parent-service';
import { Circular } from '../circular';
import { Parentdetails } from '../parentdetails';
import { ApplicationStatus } from '../application-status';

@Component({
  selector: 'app-viewcircular',
  templateUrl: './viewcircular.component.html',
  styleUrls: ['./viewcircular.component.css']
})
export class ViewcircularComponent implements OnInit {

  circulars:Circular[]=[];
  circular:Circular={
id:0,
notificationDate:new Date(),
informationText:'',
notificationPostedBy:''
}


states : ApplicationStatus[]=[];
state:ApplicationStatus={
statusId :0,
statusType:''
}
parents: Parentdetails[]=[];
parent:Parentdetails={
    id:0,
    studentRegisterNumber:'',
    fatherName:'',
    motherName:'',
    studentName:'',
    addresses:'',
    states:'',
    country:'',
    city:'',
    zipCode:'',
    email:'',
    password:'',
    dateOfBirth: new Date(),
    studentClass:'',
    primaryContactPerson:'',
    primaryContactPersonMobileNo:'',
    secondaryContactPerson:'',
    secondaryContactPersonMobileNo:'',
    circularAcknowledgement:false,
    applicationStatus:''
}

  constructor(public service:SchoolParentService) { }

  ngOnInit(): void {
    this.GetCircular();
    let values = JSON.parse(localStorage.getItem("User") || '');
    this.parent=values;
    this.GetParentDetails();
  }
  GetCircular() {
    this.service.GetCircular()
    .subscribe(
      response => { this.circulars = response}
    );
  }
  GetParentDetails() {
    this.service.GetParentDetails()
    .subscribe(
      response => { this.parents = response}
    );
  }
  updateParentDetails(parent: Parentdetails){
    this.service.updateParentDetails(parent)
    .subscribe(
      response => {
        this.GetParentDetails();
      }
    )
  }
  onSubmit(){
   
    if(this.parent.studentRegisterNumber == ''){
      this.service.updateParentDetails(this.parent)
      .subscribe(
        response => {
          this.GetParentDetails();
          this.parent = {
            id:0,
      studentRegisterNumber:'',
      fatherName:'',
      motherName:'',
      studentName:'',
      addresses:'',
      states:'',
      country:'',
      city:'',
      zipCode:'',
      email:'',
      password:'',
      dateOfBirth: new Date(),
      studentClass:'',
      primaryContactPerson:'',
      primaryContactPersonMobileNo:'',
      secondaryContactPerson:'',
      secondaryContactPersonMobileNo:'',
      circularAcknowledgement:true,
      applicationStatus:''
    };
  }
);
}
else{
  this.updateParentDetails(this.parent);
  alert('Circular Acknowledged');
}    
}
populateForm(circular: Circular){
  this.circular = circular;

}   
populate(parent:Parentdetails){
  this.parent = parent;
}
  CircularView(){
    console.log('CircularViewed');
    this.parent.circularAcknowledgement=true;

  }
  onStatusPending(){
    console.log('ViewPending');
    this.parent.circularAcknowledgement=false;

  }

}

