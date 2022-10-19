export interface Parentdetails {
    id:number;
      studentRegisterNumber:string;
      fatherName:string;
      motherName:string;
      studentName:string;
      addresses:string;
      states:string;
      country:string;
      city:string;
      zipCode:string;
      email:string;
      password:string;
      dateOfBirth:Date;
      studentClass:string;
      primaryContactPerson:string;
      primaryContactPersonMobileNo:string;
      secondaryContactPerson:string;
      secondaryContactPersonMobileNo:string;
      circularAcknowledgement:boolean;
      applicationStatus:string|null;
}