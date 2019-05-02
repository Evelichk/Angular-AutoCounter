import { Injectable } from '@angular/core';
import { USERS } from '../data/users';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  constructor() { }

  checkRegForm(password: string, confPassword: string) {
    return password === confPassword;

  }
}
