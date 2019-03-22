import { Component, OnInit } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-start-page-menu',
  templateUrl: './start-page-menu.component.html',
  styleUrls: ['./start-page-menu.component.scss']
})
export class StartPageMenuComponent implements OnInit {

  login: string;
  email: string;
  pass: string;
  confPass: string;
  loginForm = new FormGroup({
    loginValidator: new FormControl(this.pass, [
      Validators.required,
      Validators.minLength(6)
    ])
  });



  constructor() { }

  ngOnInit() {

  }




}
