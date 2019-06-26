import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  result: any;
  myDate: any;
  apods: any[] = [];

  playerVars = {
    cc_lang_pref: 'en'
  };

  id = '';

  constructor(private service: BeersService) { }

  ngOnInit() {
    this.service.getRequest('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY').subscribe(
      (data) => this.getData(data)
    );
  }

  getData(data) {
    this.result = data;
    this.apods.push(data);
    if (this.result.media_type === 'video') {
      this.id = this.youtube_parser(this.result.url);
    }
  }

  youtube_parser(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length === 11) ? match[7] : false;
  }

  selectDate() {
    const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
    const req = '&date=' + this.myDate.year + '-' + this.myDate.month + '-' + this.myDate.day;
    this.service.getRequest(baseURL + req).subscribe(
      (data) => this.getData(data)
    );

  }
}
