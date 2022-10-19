import { Component, OnInit } from '@angular/core';
import { Parentdetails } from '../parentdetails';
import { ApplicationStatus } from '../application-status';
import { SchoolParentService } from '../school-parent-service';
import { AppComponent } from '../app.component';
import { Router,RouterModule} from '@angular/router';
import { Login } from '../login';

@Component({
  selector: 'app-update-parentdetails',
  templateUrl: './update-parentdetails.component.html',
  styleUrls: ['./update-parentdetails.component.css']
})
export class UpdateParentdetailsComponent implements OnInit {
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
  constructor(public service : SchoolParentService,public appcomp:AppComponent ) { }

  ngOnInit(): void {
    console.log(this.appcomp.emailId);
    let values = JSON.parse(localStorage.getItem("User") || '');
    this.parent=values;
  
    this.GetParentDetails();
  }
  keyPressNumbers(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  keyPressAlphabets(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Alphabets 
   if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)   {
     // event.preventDefault();
      return true;
    } else {
      return false;
    }
  }
  selectedCountry: String = "--Choose Country--";
  
	Countries: Array<any> = [
		{ name: 'Germany', statess: [ {name: 'Berlin', cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn']},{name: 'Cerlin', cities: ['Hamburg', 'Boll', 'Maiz']} ] },
		{ name: 'Spain', statess: [ {name: 'Lugo', cities: ['Barcelona','Madrid','Palma']},{name: 'Ludori', cities: ['Valcia','Vigo','Burgo']} ] },
		{ name: 'USA', statess: [ {name: 'Washingtan', cities: ['Downers Grove','California','Newyork']},{name: 'Chicago', cities: ['Austin','Boston','Phoenix']} ] },
		{ name: 'India', statess: [ {name: 'TamilNadu', cities: ['Chennai','Coimbatore', 'Ramanathapuram', 'Madurai', 'Trichy']},{name: 'Karnataka', cities: ['Bangalore', 'Mangalore', 'Mandia']} ,{name: 'Andhra', cities: ['Visagapattinam', 'Thirupathi', 'Godhawari']}] },
	];
  
    //states: Array<any>; //Angular 8
	statess: Array<any> = []; //Angular 11

	//cities: Array<any>; //Angular 8
	cities: Array<any> = []; //Angular 11
	
	//changeCountry(country) { //Angular 8
	changeCountry(country: any) { //Angular 11
		//this.states = this.Countries.find(cntry => cntry.name == country).states; //Angular 8
		this.statess = this.Countries.find((cntry: any) => cntry.name == country.target.value).statess; //Angular 11
    this.parent.country=country.target.value;
	}

	//changeState(state) { //Angular 8

	changeState(state: any) { //Angular 11
		//this.cities = this.Countries.find(cntry => cntry.name == this.selectedCountry).statess.find(stat => stat.name == state).cities; //Angular 8
    
    console.log(this.statess);
		this.cities = this.statess.find((stat: any) => stat.name == state.target.value).cities; //Angular 11
    this.parent.states=state.target.value;
	}
  changeCity(city: any) { //Angular 11
	
    this.parent.city=city.target.value;
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
        alert('Details Updated Successfully');
      }
    )
  }
  onSubmit(){
    this.updateParentDetails(this.parent);
  }

}
