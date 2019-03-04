import { Component, Input, OnInit } from '@angular/core';
import { knowledgeList } from '../jobdata';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent implements OnInit {
  @Input() information;

  constructor() { }

  ngOnInit() {
    console.log('information', this.information);
  }

}
