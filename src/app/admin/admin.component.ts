import { Component, OnInit } from '@angular/core';
import { SchoolParentService } from '../school-parent-service';
import { Staff } from '../staff';
import { Router,RouterModule} from '@angular/router';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminstaff: Staff[]=[];
  admin:Staff={
    id: 0,
    staffName:'',
    password:''
  }
  constructor(public service:SchoolParentService,public routers:Router,public appcomp:AppComponent ) {}


  ngOnInit(): void {
    this.getAllStafflogin();
   }
   
   onSubmit(){
    this.getAllStafflogin();
    console.log(this.adminstaff);
    if(this.adminstaff.find(x=>x.staffName ==this.admin.staffName && x.password ==this.admin.password))
    {
      this.appcomp.adminModuleshow=true;
      this.appcomp.IsLogout=true;
      localStorage.setItem("adminModuleshow", 'true');
      localStorage.setItem("IsUsermoduleshow", 'false');
      localStorage.setItem("IsLogout", 'true');
      localStorage.setItem('logindetails',JSON.stringify(this.adminstaff))
      localStorage.setItem('User', JSON.stringify(''));
      alert("loggedin successfully")
      this.routers.navigate(['/ParentStatus']);
    }
    else{
      alert("Incorrect details")
      localStorage.setItem("IsLogout", 'false');
    }
  }
  getAllStafflogin() {
    this.service.getAllStafflogin()
    .subscribe(
      response => { this.adminstaff = response}
    );
  }

}
