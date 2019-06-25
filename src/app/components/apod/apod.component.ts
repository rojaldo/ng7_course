import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.scss']
})
export class ApodComponent implements OnInit {

  result: any;

  constructor(private service: BeersService) { }

  ngOnInit() {
    this.service.getRequest('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo').subscribe(
      (data) => this.getData(data)
    );
  }

  getData(data) {
    this.result = data;
  }
}
