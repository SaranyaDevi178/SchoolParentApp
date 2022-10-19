import { Component } from '@angular/core';
import { Router,RouterModule} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SchoolParentApp';
  adminModuleshow=false;
  IsUsermoduleshow=false;
  IsLogout=false;
  userName='';
  emailId='';
  constructor(public routers:Router){}
  Onlogout()
{
  localStorage.setItem("adminModuleshow", 'false');
  localStorage.setItem("IsLogout", 'false');
  localStorage.setItem("IsUsermoduleshow", 'false');
  localStorage.removeItem("logindetails");
  localStorage.removeItem("User");
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("token");
 this.adminModuleshow=false;
 this.IsUsermoduleshow=false;
 this.IsLogout=false;
 this.userName='';
 this.emailId='';
 }
  ngOnInit()
  {
    let values = JSON.parse(localStorage.getItem("User") || '');
    
    console.log(values.emailId);
    this.emailId=values.email;
let Logout=JSON.parse(localStorage.getItem("IsLogout")|| '');
  this.IsLogout=Logout;
  let adminModule=JSON.parse(localStorage.getItem("adminModuleshow")|| '');
  this.adminModuleshow=adminModule;
  let IsUsermodule=JSON.parse(localStorage.getItem("IsUsermoduleshow")|| '');
  this.IsUsermoduleshow=IsUsermodule;
  }
}
