import { Component, OnInit } from '@angular/core';
import { FetcherService } from '../../services/fetcher.service';
import { Location } from '@angular/common';
import { Auto } from '../../models/auto';

@Component({
  selector: 'app-auto-editor',
  templateUrl: './auto-editor.component.html',
  styleUrls: ['./auto-editor.component.scss']
})
export class AutoEditorComponent implements OnInit {
  user: string;
  name: string;
  model: string;
  year: string;
  miles: string;
  engine: string;
  transmission: string;
  color: string;

  constructor(private location: Location, private fetchService: FetcherService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    this.user = localStorage.getItem('user');
  }
  // Save auto to DB
  saveAuto(): void {
    const data = new FormData();
    data.append('make', this.name);
    data.append('model', this.model);
    data.append('year', this.year);
    data.append('miles', this.miles);
    data.append('engine', this.engine);
    data.append('transmission', this.transmission);
    data.append('color', this.color);

    const options = {
      method: 'POST',
      cache: 'default',
      body: data,
      credentials: 'include'
    };

    const fetchResponse = this.fetchService.fetcher('getcars', 'http://localhost:3000/addcar', options);
  }
  // navigating to previous page
  navBack(): void {
    this.location.back();
  }

}
