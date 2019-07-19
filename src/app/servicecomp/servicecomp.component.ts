import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CserviceService } from '../service/cservice.service';
@Component({
  selector: 'servicecomp',
  templateUrl: './servicecomp.component.html',
  styleUrls: ['./servicecomp.component.css']
})
export class ServicecompComponent  {
  sgobj:User=new User();
  signList:Array<User>=[];
  errorFirstName="";
  errorLastName="";
  errorAddressLine1="";
  errorAddressLine2="";
  errorEmail="";
  errorPhone="";
  listArray: "";

  constructor(private cserviceservice:CserviceService) {

    this.signList = cserviceservice.listArray();

  }

//  constructor() { }

  //ngOnInit() {
 // }
addUser()
{
  this.pushArray();
  this. validateFirstName();
  this.validateLastName();
  this. validateAddressline1();
  this. validateAddressline2();
  this. validateEmail();
  this.validatePhone();
 


}

  validateFirstName()
  {
    if(this.sgobj.firstName=="")
    {
      this.errorFirstName="FirstName can't be empty";
    }
  }
  validateLastName()
  {
    try{
    if(this.sgobj.lastName=="")
    {
      this.errorLastName="LastName can't be empty";
    }
  }
  
  catch(err)
  {
    console.log("err");
  }
}
  validateAddressline1()
 
  {
    if(this.sgobj.addressLine1=="")
    {
      this.errorAddressLine1="addressline1can't be empty";
    }
  }
  validateAddressline2()
 
  {
    if(this.sgobj.addressLine2=="")
    {
      this.errorAddressLine2="Addressline2 can't be empty";
    }
  }
  validateEmail()
  {
   if(this.sgobj.email==""){ this.errorEmail="Email can't be empty";}
 var patternEmail="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$";
 if(this.sgobj.email.match(patternEmail))
 {
   return true;
 }
 else{
   this.errorEmail="Invalid Email";
 }
 }
 validatePhone()
 {
  if(this.sgobj.cellPhone=="")
    {
      this.errorPhone=" Phone cant be empty";}
      var patternother="[0-9]";
      if(this.sgobj.cellPhone.match(patternother)&&this.sgobj.cellPhone.length==10){
          return true;
      }
      else{
        this.errorPhone="invalid phone number";
      }
    }
 pushArray()
   {
     this.signList.push(this.sgobj);
     console.log(this.signList);
   }
  }