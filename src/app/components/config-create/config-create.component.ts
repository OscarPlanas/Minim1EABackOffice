import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { ExamConfiguration } from 'src/app/models/ExamConfiguration';

@Component({
  selector: 'app-config-create',
  templateUrl: './config-create.component.html',
  styleUrls: ['./config-create.component.css']
})
export class ConfigCreateComponent implements OnInit {
  createConfigForm: FormGroup;
  //date: Date;
  submitted = false;
  clickCreateConfig: boolean
  constructor(private formBuilder: FormBuilder, private _router: Router) { 
    this.createConfigForm = this.formBuilder.group({});
    this.clickCreateConfig = false;
    //this.date = new Date();

  }

  ngOnInit(): void {
    this.createConfigForm = this.formBuilder.group({
      mode: ['', Validators.required],
      font: ['', Validators.required],
      //color: ['', Validators.required],
      //background: ['', Validators.required]
      //datecreation: [String(this.date.getFullYear() + '-' + this.date.getMonth() + "-" + this.date.getDate()), Validators.required],
    });
  }
  onSubmit() {
    //let date = new Date();
    //let birthday = new Date(this.createConfigForm.value.dateBirth);
    this.submitted = true;
  }
  sendCreateConfig(){
		if(!this.createConfigForm.invalid){
		axios.post('http://localhost:5432/api/examconfigurations/', {
			mode: this.createConfigForm.value.mode,
			font: this.createConfigForm.value.font,
      color: "",
      background: "",
      datecreation: "",
      //color: this.createConfigForm.value.color,
      //background: this.createConfigForm.value.background,
      //datecreation: this.date

    }).then((response) => {
			environment.auth = response.data.token;
			this._router.navigate(['/config-user'])
		}).catch((error) => {
			console.log(error);
		});
	}
	}
}
