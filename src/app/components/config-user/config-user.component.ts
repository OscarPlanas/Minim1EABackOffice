import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../../models/User';
import { ExamConfiguration } from 'src/app/models/ExamConfiguration';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.css']
})
export class ConfigUserComponent implements OnInit {
  
  ConfigListForm: FormGroup;
  submitted = false;
  clickCreateEvent: boolean;
  listConfigs : ExamConfiguration[] = [];

  constructor(private formBuilder: FormBuilder, private _router: Router) { 
    this.ConfigListForm = this.formBuilder.group({});
    this.clickCreateEvent = false;
  }
  rowData$!:any;
  
  
  ngOnInit(): void {
    this.getConfigs();
  }
  getConfigs(){
		const response = axios.get(`http://localhost:5432/api/examconfigurations/`, {
		}).then((response) => {
      this.listConfigs = response.data;
		}).catch((error) => {
			console.log(error);
		});
	}
  deleteConfig(id: String){
    console.log(id);
    if(!this.ConfigListForm.invalid){
      const response = axios.delete(`http://localhost:5432/api/examconfigurations/${id}`)
      .then((response) => {
      this.getConfigs();
 
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  go2UpdateConfig(id: String){
    this._router.navigate(['/config-update/${id}'])
  }


}
