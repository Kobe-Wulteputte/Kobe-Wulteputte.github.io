import { Component, OnInit } from '@angular/core';
import {
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  faInstagram = faInstagram;
  constructor() {}

  ngOnInit(): void {}
}
