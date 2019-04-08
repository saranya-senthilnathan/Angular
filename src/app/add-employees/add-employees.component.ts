import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeType } from '../employee-type';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {

  constructor(private apiservice:ApiService, private formbuilder:FormBuilder) { }
 
  addForm : FormGroup;
  
  ngOnInit() {
	  this.addForm = this.formbuilder.group({
		  id :[],
		  fname : [" ", Validators.required],
		  lname : [" ", Validators.required],
		  age : [" ", Validators.required],
		  salary : [" ", Validators.required]
	  });
  }

  
  onSubmit(eve) {
	  eve.preventDefault();
	  let formVal = this.addForm.value;
	  
	  this.apiservice.createEmployee(formVal).subscribe((data) => {
		  console.log(data);
	  },
	  (err) => {
		  console.log(err);
	  });
  }

}
