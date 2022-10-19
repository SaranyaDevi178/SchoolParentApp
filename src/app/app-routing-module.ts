import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminComponent } from './admin/admin.component';
import { CircularComponent } from './circular/circular.component';
import { ParentStatusUpdateComponent } from './parent-status-update/parent-status-update.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewcircularComponent } from './viewcircular/viewcircular.component';
import { UpdateParentdetailsComponent } from './update-parentdetails/update-parentdetails.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';


const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'home',component:HomePageComponent},
  {path:'about',component:AboutComponent},
  {path:'admin',component:AdminComponent},
  {path:'circular',component:CircularComponent},
  {path:'Logout',component:HomePageComponent},
  {path:'ParentStatus',component:ParentStatusUpdateComponent},
  {path:'signup',component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'viewcircular',component:ViewcircularComponent},
  {path:'updateparent',component:UpdateParentdetailsComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }