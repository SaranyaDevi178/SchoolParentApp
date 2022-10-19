import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { ApplicationStatus } from '../application-status';
import { Parentdetails } from '../parentdetails';
import { SchoolParentService } from '../school-parent-service';
import { Router,RouterModule} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  loginn:Login[]=[];
  loggedin:Login= {
    email: '',
    password:''
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
      circularAcknowledgement:true,
      applicationStatus:''
  }
  emaildetail:any;
  constructor(public service : SchoolParentService,private route:ActivatedRoute) { }

  ngOnInit(): 
    void { 
  
 const  selectedOrder = this.parents.find(x=>x.email==this.parent.email)
  this.GetParentDetails();
 
}
GetParentDetails() {
  this.service.GetParentDetails()
  .subscribe(
    response => { this.parents = response}
  );
}

updateParent(parent: Parentdetails){
  console.log(parent);
  let  selectedOrder = this.parents.find(x=>x.email==this.loggedin.email)
  console.log('forget pwd');
  console.log(selectedOrder!);
  
  selectedOrder!.password=this.loggedin.password;
  if(selectedOrder?.email==this.loggedin.email)
  {
    console.log("loggedin"+selectedOrder!);
  this.service.updateParent(selectedOrder!)
  .subscribe(
    response => {
      this.GetParentDetails(); alert("Password updated successfully");
    }
  )
  }
  else 
  {
    console.log("loggedout");
    alert("Invalid EmailID");
  }
}
onSubmit(){
  this.updateParent(this.parent);
 
}

}
