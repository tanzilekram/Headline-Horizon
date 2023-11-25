import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './../../../services/news-api.service';




@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
 
 
})
export class HeroComponent implements OnInit {
  constructor(private api: NewsApiService) {}

  timeNow: string = 'askldjfsjkld';
  HeadLinesArray: any = [];
  selected = 'US';

  ngOnInit(): void {
    this.getTimeNow();
    // Default to Top Headlines (US)
    this.getNews('US');
  }

  

  getNews(topic: string) {
    let apiEndpoint = '';

    switch (topic) {
      case 'US':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=795bd5a177f04b56a96869145b378455';
        break;
      case 'INDIA':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=795bd5a177f04b56a96869145b378455';
        break;
      case 'UK':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey=795bd5a177f04b56a96869145b378455';
        break;
      case 'BUSINESS (US)':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'BUSINESS (INDIA)':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'BUSINESS (UK)':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=gb&category=business&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'SPORTS (US)':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'SPORTS (INDIA)':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'SPORTS (UK)':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'ENTERTAINMENT (US)':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'ENTERTAINMENT (INDIA)':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'ENTERTAINMENT (UK)':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=gb&category=entertainment&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'TECHNOLOGY (US)':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'TECHNOLOGY (INDIA)':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'TECHNOLOGY (UK)':
       apiEndpoint = 'https://newsapi.org/v2/top-headlines?country=gb&category=technology&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'APPLE':
        apiEndpoint = 'https://newsapi.org/v2/everything?q=apple&from=2023-12-06&to=2023-12-06&sortBy=popularity&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'TESLA':
        apiEndpoint = 'https://newsapi.org/v2/everything?q=tesla&from=2023-11-07&sortBy=publishedAt&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'BBC NEWS':
        apiEndpoint = 'https://newsapi.org/v2/everything?q=bbc-news&from=2023-11-07&sortBy=publishedAt&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
        case 'CNN NEWS':
        apiEndpoint = 'https://newsapi.org/v2/everything?q=cnn&sortBy=publishedAt&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
        case 'GOOGLE NEWS':
        apiEndpoint = 'https://newsapi.org/v2/everything?q=google-news&sortBy=publishedAt&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'TECHCRUNCH':
        apiEndpoint = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=8be6bfc937b84340ba6116ee327903c2';
        break;
      case 'WALL STREET JOURNAL':
          apiEndpoint = 'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=8be6bfc937b84340ba6116ee327903c2';
          break;
      default:
        break;
    }

    this.api.getTopHeadLines(apiEndpoint).subscribe((res) => {
      this.HeadLinesArray = res.articles;
    });
  }


  getTimeNow() {
    let time = new Date().toLocaleTimeString('en-US', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    });
    let date = new Date().toLocaleDateString();
    this.timeNow = " Today is " + date + " And Now the time is: "+ " "+time;
    // console.log(this.timeNow);

  }
}
