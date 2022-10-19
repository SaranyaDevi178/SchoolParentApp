import { Component, OnInit } from '@angular/core';
import { SchoolParentService } from '../school-parent-service';
import { Circular } from '../circular';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {
circulars:Circular[]=[];
circular:Circular={
id:0,
notificationDate:new Date(),
informationText:'',
notificationPostedBy:''
}

  constructor(public service:SchoolParentService) { }

  ngOnInit(): void {
    this.GetCircular();
  }

  // onSubmit(){
    
  //   console.log(this.circulars);
  //   this.service.PostCircular(this.circular).subscribe(response=>{this.circulars ; alert("Successfully Created");});
  // }

  GetCircular() {
    this.service.GetCircular()
    .subscribe(
      response => { this.circulars = response}
    );
  }
  onSubmit(){
    if(this.circular.id == 0){
      this.service.PostCircular(this.circular)
      .subscribe(
        response => {
          this.GetCircular();
          this.circular = {
            id:0,
            notificationDate:new Date(),
            informationText:'',
            notificationPostedBy:''
          };
          alert('Circular Added Succesfully');
        }
      );
    }
    else{
      this.updateDetails(this.circular);
    }    
  }

  deleteDetails(id:number){
    this.service.deleteCircular(id)
    .subscribe(
      response => {
        this.GetCircular();
      }
    )
  }

  populateForm(circular: Circular){
    this.circular = circular;

  }
  
  updateDetails(circular: Circular){
    this.service.updateCircular(circular)
    .subscribe(
      response => {
        this.GetCircular();
      }
    )
  }

}
