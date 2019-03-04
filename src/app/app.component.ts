import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { jobData } from './jobdata';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  title = 'feb-parallax';
  jobData = jobData;

  ngOnInit() {
  }

  ngAfterContentInit(): void {
  }

  getCardClass (i) {
    console.log('card class', i)
    return `${50 + i * 450}px`;
  }

  getCardTop() {
    return '40px';
  }

  getCardLeft (i) {
    return `${50 + i * 450}px`;
  }
}
