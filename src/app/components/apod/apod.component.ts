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

  constructor(private service: BeersService) { }

  ngOnInit() {
    this.service.getRequest('https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6').subscribe(
      (data) => this.getData(data)
    );
  }

  getData(data) {
    this.result = data;
  }

  selectDate() {
    const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=tqz634Z1x0LiJzjbhSyUoExrZaGKLM0MG1VnROR6';
    const req = '&date=' + this.myDate.year + '-' + this.myDate.month + '-' + this.myDate.day;
    this.service.getRequest(baseURL + req).subscribe(
      (data) => this.getData(data)
    );

  }
}
