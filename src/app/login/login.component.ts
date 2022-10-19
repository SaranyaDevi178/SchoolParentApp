import { Component, OnInit } from '@angular/core';
import { Parentdetails } from '../parentdetails';
import { ApplicationStatus } from '../application-status';
import { SchoolParentService } from '../school-parent-service';
import { AppComponent } from '../app.component';
import { Router,RouterModule} from '@angular/router';
import { Login } from '../login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

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
  constructor(public service : SchoolParentService,private appcomp:AppComponent,public routers:Router) { }

  ngOnInit(): void {
    this.service.GetParentDetails().subscribe(response=>this.parents=response);
    console.log('parents'+this.parents);
  }

  onSubmit(){
    console.log(this.loggedin.email);
    console.log(this.parents);
    this.service.ValidateUsers(this.loggedin).subscribe(
      (response:any)=>{
if(response.isAuthenticated)
{
 
  const  selectedOrder = this.parents.find(parents => parents.email == this.loggedin.email);
   
   console.log(selectedOrder); 
  if(selectedOrder?.applicationStatus=="Approved")
  {
    console.log('Approved');
     
       this.appcomp.IsUsermoduleshow=true;
       this.appcomp.IsLogout=true;
      
       localStorage.setItem('User', JSON.stringify(selectedOrder!));
       let values = JSON.parse(localStorage.getItem("User") || '');
       this.appcomp.emailId= selectedOrder!.email;
       console.log('email'+this.appcomp.emailId);
    this.appcomp.adminModuleshow=false;
      localStorage.setItem("IsUsermoduleshow", 'true');
      this.routers.navigate(['/viewcircular']);
  }
  else if(selectedOrder?.applicationStatus=="Rejected")
  {
 
    console.log('Rejected or pending');
    this.appcomp.IsUsermoduleshow=false;
  this.appcomp.adminModuleshow=false;
    this.appcomp.IsLogout=false;
    localStorage.setItem('User', JSON.stringify(selectedOrder!));
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    localStorage.setItem("IsUsermoduleshow", 'false');
    localStorage.setItem("adminModuleshow", 'false');
    alert ("Application rejected");
  }
  else if(selectedOrder?.applicationStatus=="Pending" || selectedOrder?.applicationStatus=="")
  {
    alert ("Application Pending... please wait for Admin approval");
    console.log('Rejected or pending');
    this.appcomp.IsUsermoduleshow=false;
  this.appcomp.adminModuleshow=false;
    this.appcomp.IsLogout=false;
    localStorage.setItem('User', JSON.stringify(selectedOrder!));
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    localStorage.setItem("IsUsermoduleshow", 'false');
    localStorage.setItem("adminModuleshow", 'false');
  }
  else{
    alert ("invalid login")
    console.log('Rejected or pending');
    this.appcomp.IsUsermoduleshow=false;
  this.appcomp.adminModuleshow=false;
    this.appcomp.IsLogout=false;
    localStorage.setItem('User', JSON.stringify(selectedOrder!));
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("token");
    localStorage.setItem("IsUsermoduleshow", 'false');
    localStorage.setItem("adminModuleshow", 'false');
  }
 // this.book.bookId=0;
  localStorage.setItem("token",response.token);
  localStorage.setItem("isAuthenticated",response.isAuthenticated);
 // this.appcomp.userName=selectedOrder!.userName;
 // this.appcomp.emailId=selectedOrder?.email;
  localStorage.setItem("IsLogout", 'true');
}
else{
  alert("invalid login credentials");
    
  this.appcomp.IsLogout=false;
//  this.appcomp.userName='';
  this.appcomp.emailId='';
  localStorage.setItem("IsLogout", 'false');

}
      }

    );

  }

}