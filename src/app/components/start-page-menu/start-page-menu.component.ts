import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ValidatorService } from '../../services/validator.service';
import { RouterModule, Router } from '@angular/router';
import { User } from '../../models/user';
import { USERS } from '../../data/users';
import { FetcherService } from '../../services/fetcher.service';

@Component({
  selector: 'app-start-page-menu',
  templateUrl: './start-page-menu.component.html',
  styleUrls: ['./start-page-menu.component.scss']
})
export class StartPageMenuComponent implements OnInit {

  id = 0;
  login: string;
  email: string;
  pass: string;
  confPass: string;
  validForm: boolean;
  loginForm = new FormGroup({
    loginValidator: new FormControl(this.pass, [
      Validators.required,
      Validators.minLength(6)
    ])
  });
  regForm = new FormGroup( {
    login: new FormControl(this.login, [
      Validators.required,
      Validators.minLength(3)
    ]),
    email: new FormControl(this.email, [
      Validators.required,
      Validators.email,
    ]),
    pass: new FormControl(this.pass, [
      Validators.required,
      Validators.minLength(6)
    ]),
    confPass: new FormControl(this.confPass, [
      Validators.required
    ])
  });

  constructor(private validatorService: ValidatorService, private router: Router,
              private fetchService: FetcherService) { }

  ngOnInit() {}

  async validateLoginForm(): Promise<void> {
    event.preventDefault();
    try {
        const data = new FormData();
        data.append('username', this.login);
        data.append('password', this.pass);

        const options = {
          method: 'POST',
          cache: 'default',
          body: data,
          credentials: 'include'
        };

        const fetchResponse = this.fetchService.fetcher('login', 'http://localhost:3000/login', options);
        if (fetchResponse) {
          localStorage.setItem('user', this.login);
          this.router.navigate([`/stream/${this.login}`]);
        }
    } catch (err) {
      if (err) {
        console.log(err);
      }
    }
  }

  async validateRegForm(): Promise<void> {
    event.preventDefault();
    try {
      this.validForm = this.validatorService.checkRegForm(this.pass, this.confPass);
      if (this.validForm) {
        const data = new FormData();
        data.append('username', this.login);
        data.append('email', this.email);
        data.append('password', this.pass);

        const options = {
          method: 'POST',
          cache: 'default',
          body: data,
          credentials: 'include'
        };

        const fetchResponse = this.fetchService.fetcher('registration', 'http://localhost:3000/register', options);
        if (fetchResponse) {
          localStorage.setItem('user', this.login);
          this.router.navigate([`/stream/${this.login}`]);
        }
      } else {
        console.log('INVALID_FORM');
      }

    } catch (err) {
      if (err) {
        console.log(err);
        return;
      }
    }
  }
}

