import { Component, OnInit } from '@angular/core';
import { Parentdetails } from '../parentdetails';
import { SchoolParentService } from '../school-parent-service';
import { ApplicationStatus } from '../application-status';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Router,RouterModule} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
//   countryList: Array<any> = [
//     { name: 'Germany', stateList:[ {name:'aaaa',cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },]   },
//     { name: 'Spain',stateList:[ {name:'ddd',cities: ['Barcelona']}]},
//     { name: 'USA',stateList:[{name:'eee',cities: ['Downers Grove']}] },
//     { name: 'Mexico', stateList:[ {name :'ffff',cities: ['Puebla']}] }
   
//   ];

// statess:Array<any>=[];
//   // stateList:Array<any>=[
//   //   {name:'aaaa',cities: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'] },
//   //   {name:'ddd',cities: ['Barcelona']},
//   //   {name:'eee',cities: ['Downers Grove']},
//   //   {name :'ffff',cities: ['Puebla']}
//   // ];

  
//   changeState(count:any) {
//     this.citiess = this.stateList.find(con => con.name == count.target.value).cities;
//     console.log(this.citiess);
//   }
//   citiess: Array<any>=[];
//   changeCountry(count:any) {
//     console.log('changecountry');
//     console.log(count.target.value);
//     this.statess = this.countryList.find(con => con.name == count.target.value).stateList;
//     console.log(this.statess);
//   }


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
      applicationStatus: 'Pending'
  }

  constructor(public service:SchoolParentService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    
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

  onSubmit(){
    console.log('parent info:'+this.parent);
    this.GetParentDetails();
   const isExist= this.parents.find(x=>x.email==this.parent.email);
    console.log(isExist);
    if(!isExist)
    {
    console.log("login");
    // this.parent.applicationStatus="Pending";
    console.log(this.parent.applicationStatus);
    this.service.PostParentDetails(this.parent).subscribe(response=>{this.parents ; alert("Registered Successfully.. please wait for Admin approval ");});
    }
    else{
      console.log("failed");
      alert("The data is already in database ");
    }
  }

  GetParentDetails() {
    this.service.GetParentDetails()
    .subscribe(
      response => { this.parents = response}
    );
  }

  // PostParentDetails(parent: Parentdetails)
  // {
  //   this.service.PostParentDetails(this.parent).subscribe(
  //     response => { this.parent = response});
  // }

}
