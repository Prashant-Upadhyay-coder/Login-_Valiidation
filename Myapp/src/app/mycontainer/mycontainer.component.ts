import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mycontainer',
  templateUrl: './mycontainer.component.html',
  styleUrls: ['./mycontainer.component.css']
})
export class MycontainerComponent {
  title = '';
  isactive:boolean=true;
  successmsg=""
  errormsg=""
  multistyle={}
  myform! :FormGroup
constructor(private fb : FormBuilder ,private router :Router){}

  ngOnInit(): void {
   this.myform =this.fb.group({
    username:['',[Validators.required,Validators.minLength(6)]],
    password:['',[Validators.required,Validators.minLength(10)]],
    rollid:['',[Validators.required]]
   })
  }
 onrrr(){
  if(this.myform.valid){
    this.isactive = false
    this.successmsg="Loging succesfully"
    this.multistyle = { display: 'block' };
    this.router.navigate(['/home']);

  }else{
    this.myform.markAllAsTouched()
    this.errormsg ="logging Error"
    this.multistyle = { display: 'block' };
  }
 }
}
