import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Circular } from './circular';
import { FeesDetails } from './fees-details';
import { Holidaydetails } from './holidaydetails';
import { Login } from './login';
import { Parentdetails } from './parentdetails';
import { Staff } from './staff';

//import * as countrycitystatejson from 'countrycitystatejson';

@Injectable({
  providedIn: 'root'
})
export class SchoolParentService {
  //private countryData = countrycitystatejson;
  
FeesUrl = 'https://localhost:7189/api/FeesDetails';
HolidayUrl ='https://localhost:7189/api/HolidayDetails';
StaffParentUrl='https://localhost:7189/api/Parents';
CircularUrl='https://localhost:7189/api/Circulars';
ParentUrl='https://localhost:7187/api/Parents';
login='https://localhost:7051/validate';
Stafflogin='https://localhost:7189/api/staffs';
UpdateParent='https://localhost:7187/api/ParentDetails'

 constructor(private http: HttpClient) { }

 //Get all Books
  getAllFeesDetails():Observable<FeesDetails[]>{
      return this.http.get<FeesDetails[]>(this.FeesUrl);
  }

  getAllStafflogin():Observable<Staff[]>{
    console.log("checking URL");
    return this.http.get<Staff[]>(this.Stafflogin);
    
}


  getAllHolidayDetails():Observable<Holidaydetails[]>{
      return this.http.get<Holidaydetails[]>(this.HolidayUrl);
  }
  getAllParentDetailsForStaff():Observable<Parentdetails[]>{
      return this.http.get<Parentdetails[]>(this.StaffParentUrl);
  }
  StaffupdatingParentStatus(parent: Parentdetails):Observable<Parentdetails>{
    return this.http.put<Parentdetails>(this.StaffParentUrl +'/'+parent.studentRegisterNumber,parent);
  }

  GetCircular():Observable<Circular[]>{
      return this.http.get<Circular[]>(this.CircularUrl);
  }
  deleteCircular(id:number):Observable<Circular>{
    return this.http.delete<Circular>(this.CircularUrl +'/'+id);
  }

  updateCircular(circular: Circular):Observable<Circular>{
    return this.http.put<Circular>(this.CircularUrl +'/'+circular.id,circular);
  }



  PostCircular(circular: Circular):Observable<Circular> {
    return this.http.post<Circular>(this.CircularUrl, circular);
  }
  
  GetParentDetails():Observable<Parentdetails[]>{
    return this.http.get<Parentdetails[]>(this.ParentUrl);
}
updateParentDetails(parent: Parentdetails):Observable<Parentdetails>{
    return this.http.put<Parentdetails>(this.ParentUrl +'/'+parent.id,parent);
  }

 
  updateParent(parent: Parentdetails):Observable<Parentdetails>{
    return this.http.put<Parentdetails>(this.UpdateParent +'/'+parent.email,parent);
  }

  PostParentDetails(parent: Parentdetails):Observable<Parentdetails> {
    return this.http.post<Parentdetails>(this.ParentUrl, parent);
  }

  ValidateUsers(userValidation:Login):Observable<Login>
  {
    return this.http.post<Login>(this.login,userValidation);
  }
  

}