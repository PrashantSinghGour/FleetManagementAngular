import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {IRegisteruser} from '../Interfaces/iregisteruser';
import { UserReg } from '../Classes/user-reg';
import { RegisteruserdataService } from '../Services/registeruserdata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-membership-registration',
  templateUrl: './membership-registration.component.html',
  styleUrls: ['./membership-registration.component.css']
})
export class MembershipRegistrationComponent implements OnInit {

  constructor(public fb:FormBuilder,private dataserv: RegisteruserdataService, private router: Router){}
   
userObj:IRegisteruser;
empForm:FormGroup;
submitted=false;
  ngOnInit() {
    this.buildForm();
  }
  buildForm(){
    this.empForm=this.fb.group({
      fname:['',[Validators.required]],
      lname:['',[Validators.required]],
      dob:['',[Validators.required]],
      licsense:['',Validators.required],
      aadharno:['',Validators.required],
      passport:['',Validators.required],
      phoneno:['',Validators.required],
      email:['',Validators.required],
      useradd1:['',Validators.required],
      useradd2:['',Validators.required],
      password:['',Validators.required]
    });

  }
 get fname() {
   return this.empForm.get('fname');
 }
 get lname(){
  return this.empForm.get('lname');
}
 get dob (){
   return this.empForm.get('dob');
 }
get licsense(){
  return this.empForm.get('licsense');
}
get aadharno(){
  return this.empForm.get('aadharno');
}
 
get passport(){
  return this.empForm.get('passport')
}


get phoneno(){
  return this.empForm.get('phoneno');
}

get email(){
  return this.empForm.get('email');
}

get useradd1(){
  return this.empForm.get('useradd1');
}

get useradd2(){
  return this.empForm.get('useradd2');
}
get password(){
  return this.empForm.get('password');
}

onSubmit(userObj:FormGroup){
  this.submitted=true;
  if(!this.empForm.valid){
    console.log(this.empForm.value);
    return;
  }
  this.mapFormValues(this.empForm);
  this.postData(this.userObj);
  }
  mapFormValues(form:FormGroup){
    this.userObj=new UserReg('','','','','','','','','','','');
    this.userObj.userfname = form.controls.userfname.value;
    this.userObj.userlname = form.controls.userlname.value;
    this.userObj.userdob   = form.controls.userdob.value;
    this.userObj.userdrivinglisc = form.controls.userdrivinglisc.value;
    this.userObj.useraadharno = form.controls.useraadharno.value;
    this.userObj.userpassportno = form.controls.userpassportno.value;
    this.userObj.userphoneno = form.controls.userphoneno.value;
    this.userObj.useremailid= form.controls.useremailid.value;
    this.userObj.useraddress1= form.controls.useraddress1.value;
    this.userObj.useraddress2 = form.controls.useraddress2.value;
    this.userObj.userpassword= form.controls.userpassword.value;

  }
  postData(userObj){
this.dataserv.postUser(userObj).subscribe((data)=>{
  this.router.navigate(['/home']);
});
}

  }



