import { Component, OnInit } from '@angular/core';
import { Parentdetails } from '../parentdetails';
import { SchoolParentService } from '../school-parent-service';
import { ApplicationStatus } from '../application-status';
@Component({
  selector: 'app-parent-status-update',
  templateUrl: './parent-status-update.component.html',
  styleUrls: ['./parent-status-update.component.css']
})
export class ParentStatusUpdateComponent implements OnInit {

  timeDiff :any;
  age :any;

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
      circularAcknowledgement:true,
      applicationStatus:''
  }

 
  constructor(public service:SchoolParentService) { }
 
  ngOnInit(): void {
    this.getAllParentDetailsForStaff();
    this.StaffupdatingParentStatus(this.parent);
  }
  getAllParentDetailsForStaff() {
    this.service.getAllParentDetailsForStaff()
    .subscribe(
      response => { this.parents = response}
    );
  }
  
  onSubmit(){
   
    if(this.parent.studentRegisterNumber == ''){
      this.service.StaffupdatingParentStatus(this.parent)
      .subscribe(
        response => {
          this.getAllParentDetailsForStaff();
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
  this.StaffupdatingParentStatus(this.parent);
  alert('Status Updated Successfully');

}    
}
  populateForm(parent:Parentdetails){
    this.parent = parent;
  
let date=    new Date(this.parent.dateOfBirth)
this.timeDiff = Math.abs(Date.now() - date.getTime());
this.age = Math.floor((this.timeDiff / (1000 * 3600 * 24))/365.25);
console.log(this.age);
  }
  
  StaffupdatingParentStatus(parent: Parentdetails){
    this.service.StaffupdatingParentStatus(parent)
    .subscribe(
      response => {
        this.getAllParentDetailsForStaff();
      }
    )
  }
  onStatusApproved(){
    console.log('Approved');
    this.state.statusId=1;

  }
  onStatusPending(){
    console.log('Pending');
    this.state.statusId=2;

  }
  onStatusRejected(){
    console.log('Rejected');
    this.state.statusId=3;

  }



}



