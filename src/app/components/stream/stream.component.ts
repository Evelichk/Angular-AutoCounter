import { Component, OnInit } from '@angular/core';
import { USERS } from '../../data/users';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { FetcherService } from '../../services/fetcher.service';
import {Auto} from '../../models/auto';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {
  user: string;
  auto: Auto[];
  selectedCar: Auto;

  constructor(private router: Router, private fetchService: FetcherService) {
    this.user = localStorage.getItem('user');
    this.auto = this.fetchService.getCars();
  }

  ngOnInit() {
  }
  getcars(): void {
    const data = new FormData();
    data.append('username', this.user);


    const options = {
      method: 'POST',
      cache: 'default',
      body: data
    };

    const fetchResponse = this.fetchService.fetcher('getcars', 'http://localhost:3000/getcars', options);
  }

  onCarSelect(car: Auto): void {
    this.selectedCar = car;
  }

  addAuto(): void {
    this.router.navigate([`/stream/${this.user}/add`]);
  }

}
