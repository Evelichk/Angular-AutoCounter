import { Injectable } from '@angular/core';
import { AUTO } from '../data/cars';
import { USERS } from '../data/users';
import { Auto } from '../models/auto';
import { User } from '../models/user';
import { MODS } from '../data/mods';


@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  fetcher(fetchName: string, path: string, options: object): Promise<void> {
    let fetchResponse: object;

    const request = fetch(path, options)
      .then((response) => {
        switch (fetchName) {
          case'login': {
            if (response.status === 200) {
              fetchResponse = response;
              console.log('LOGIN SUCCESSFULL');
            } else {
              console.log('WRONG LOGIN/PASSWORD');
            }
            break;
          }
          case 'registration': {
            if (response.status === 200) {
              fetchResponse = response;
              console.log('REGISTRATION SUCCESSFULL');
            } else {
              console.log('USER ALREADY EXIST');
            }
            break;
          }
          case 'getcars': {
            if (response.status === 200) {
              fetchResponse = response;
            } else {
              console.log('WRONG REQUEST');
            }

            break;
          }
          case 'addcar': {
            fetchResponse = response;
          }
        }
      });
    return request;
  }

  getCars(): Auto[] {
    return;
  }
  getUser(): User {
    return;
  }
  getMods() {
    return MODS;
  }

  constructor() { }


}
