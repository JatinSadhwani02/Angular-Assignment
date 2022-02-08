import { Component, OnInit } from '@angular/core';
import {FormControl, FormControlName, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  employeeForm = new FormGroup({
    ename : new FormControl('',[Validators.required]),
    eaddress : new FormControl('',[Validators.required]),
    ephonenumber : new FormControl('',[Validators.minLength(10), Validators.maxLength(10)]),
    edob : new FormControl('',[Validators.required]),
    eemail : new FormControl('',[Validators.email])
  })

  get ename(){
    return this.employeeForm.get('ename')
  }

  get eaddress(){
    return this.employeeForm.get('eaddress')
  }

  get ephonenumber(){
    return this.employeeForm.get('ephonenumber')
  }

  get edob(){
    return this.employeeForm.get('edob')
  }

  get eemail(){
    return this.employeeForm.get('eemail')
  }

  employeeData:any;
  getEmployeeData(){
        console.log(this.employeeForm.value);
        this.employeeData = this.employeeForm.value;
  }




}
