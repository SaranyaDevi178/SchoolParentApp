import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing-module';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { CircularComponent } from './circular/circular.component';
import { ParentStatusUpdateComponent } from './parent-status-update/parent-status-update.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewcircularComponent } from './viewcircular/viewcircular.component';
import { UpdateParentdetailsComponent } from './update-parentdetails/update-parentdetails.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutComponent,
    AdminComponent,
    CircularComponent,
    ParentStatusUpdateComponent,
    SignupComponent,
    LoginComponent,
    ViewcircularComponent,
    UpdateParentdetailsComponent,
    ForgetpasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
