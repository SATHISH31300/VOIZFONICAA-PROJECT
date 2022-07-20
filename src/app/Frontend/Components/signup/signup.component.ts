import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import { Router } from '@angular/router';

import { ServicesService } from '../../../services.service';
import { NewUser } from '../../../models/newUser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  errroMessage:string=''
  public inputtype:string='password'

  form:FormGroup = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email:new FormControl(''),
      phno:new FormControl(''),
      password:new FormControl(''),
      
   })
   submitted=false;

//   newuser:NewUser=new NewUser();


  constructor(private servicesService:ServicesService ,private router:Router,private formBuilder:FormBuilder) { }
  get f(){
    return this.form.controls;
  }
  //password hiding and showing
  public showpassword(event:any):void{
    if(event.target.checked)
    {
      this.inputtype='text';
    }
    else{
      this.inputtype='password';
    }
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phno:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
      password: ['', Validators.required,],
      
    }); 

    this.submitted=true;
    if(this.form.invalid)
    {     
     
      return;
      
    }
    else
    {
      console.log(this.form.value)
    }
    
  }
  
 
  signup(){
    // alert('User Created')
    console.log(this.form.value);
    this.servicesService.signupUser(this.form.value).subscribe(data=>{
      alert("Congrats!!! User Account Created")
      this.router.navigate(['userlogin'])
    },error=>alert("Email Already Exists"));
}

}
