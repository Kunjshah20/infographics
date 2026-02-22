import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  topics: string[] = ['Business', 'Sport', 'Entertainment', 'Health', 'Productivity'];
  selectedTopic: string = '';

  infographicData: { [key: string]: string[] } = {
    'Business': [
      'assets/biz-1.webp', 
      'assets/biz-2.webp'
    ],
    'Sport': [
      'assets/sport-1.webp'
    ],
    'Entertainment': [
      'assets/entertainment-1.webp', 
    ],
    'Health': [
      'assets/health-1.webp',
    ],
    'Productivity': [
      'assets/prod-1.webp',
    ]
  };

  selectTopic(topic: string): void {
    this.selectedTopic = topic;
  }
}