import { Component, OnInit } from '@angular/core';
import { StartPageMenuComponent} from '../start-page-menu/start-page-menu.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
  }


  ngOnInit() {
    this.playVideo();
  }

  playVideo() {
    window.addEventListener('load', async () => {
      const video = document.querySelector('video');
      try {
        await video.play();
      } catch (err) {
        video.controls = true;
      }
    });
  }

}
