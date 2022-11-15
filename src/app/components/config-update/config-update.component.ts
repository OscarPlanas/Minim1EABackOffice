import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Observable } from 'rxjs';
import { ExamConfiguration } from 'src/app/models/ExamConfiguration';

@Component({
  selector: 'app-config-update',
  templateUrl: './config-update.component.html',
  styleUrls: ['./config-update.component.css']
})
export class ConfigUpdateComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  clickRegister: boolean;
  userDataErr: boolean = false;

  config:ExamConfiguration={
    _id:"",
    mode:"",
    font: new Number(),
    color:"",
    background:"",
    datecreation:new Date()
  }
  constructor(private formBuilder: FormBuilder, private _router: Router, private activedRoute: ActivatedRoute) {
    this.registerForm = this.formBuilder.group({});
    this.clickRegister = true;
   }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    console.log(params);
    this.getConfig(params._id);
    this.registerForm = this.formBuilder.group({
      mode: ['', Validators.required],
      font: ['', Validators.required],
      color: ['', Validators.required],
      background: ['', Validators.required]
    });
  }
  getConfig(id:String){
		const response = axios.get(`http://localhost:5432/api/examconfigurations/profile/${id}`, {
		}).then((response) => {
      console.log(response);
      this.config = response.data;
		}).catch((error) => {
			console.log(error);
		});
	}
  updateConfig() {
    axios.put(`http://localhost:5432/api/examconfigurations/`, {
      _id: this.config._id,
			mode: this.registerForm.value.mode,
			font: this.registerForm.value.font,
			color: this.registerForm.value.color,
			background: this.registerForm.value.background,
		})
    .then((response) => {
      this._router.navigate(['/configlist'])
    }).catch((error) => {
      console.log(error);
    });
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

	}

}
