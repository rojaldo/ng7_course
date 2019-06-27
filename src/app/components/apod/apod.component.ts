import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';

export interface AbstractProduct {
  date: string;
  explanation: string;
  title: string;
  mediaType: string;
}

export class ConcreteProductImage implements AbstractProduct {
  date: string;
  explanation: string;
  title: string;
  mediaType: string;
  imageURL: string;

  constructor(json: any) {
    this.date = json.date;
    this.title = json.title;
    this.explanation = json.explanation;
    this.mediaType = json.media_type;
    this.imageURL = json.url;
  }

}

export class ConcreteProductVideo implements AbstractProduct {
  date: string;
  explanation: string;
  title: string;
  mediaType: string;
  videoURL: string;

  constructor(json: any) {
    this.date = json.date;
    this.title = json.title;
    this.explanation = json.explanation;
    this.mediaType = json.media_type;
    this.videoURL = json.url;
  }
}

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  result: any;
  myDate: any;
  apods: AbstractProduct[] = [];

  constructor(private service: BeersService) { }

  ngOnInit() {
    this.service.getRequest('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(
      (data) => this.getData(data)
    );
  }

  getData(data) {
    this.result = data;
    this.apods.push(this.createProduct(data));
  }

  createProduct(json: any): AbstractProduct {
    if (json.media_type === 'image') {
      return new ConcreteProductImage(json);
    } else if (json.media_type === 'video') {
      return new ConcreteProductVideo(json);
    }
    return null;
  }



  selectDate() {
    const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    const req = '&date=' + this.myDate.year + '-' + this.myDate.month + '-' + this.myDate.day;
    this.service.getRequest(baseURL + req).subscribe(
      (data) => this.getData(data)
    );

  }
}
