import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';
import { Options } from 'ng5-slider';
import { Beer } from 'src/app/model/beer';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  result: any;
  responded = true;
  beers: Beer[] = [];
  vBeers: Beer[] = [];

  value = 2;
  highValue = 8;
  options: Options = {
    floor: 0,
    ceil: 60
  };

  constructor(private service: BeersService) { }

  ngOnInit() {
    this.service.getRequest().subscribe(
      (data) => this.processResquest(data),
      (error) => this.processError(error),
      () => this.finalProcess()
    );
  }

  handleRange() {
    this.vBeers = this.beers;
    this.vBeers = this.vBeers.filter(beer => (beer.alcohol >= this.value && beer.alcohol <= this.highValue));
  }

  processResquest(data: any) {
    this.result = data;
    for (const json of this.result) {
      this.beers.push(new Beer(json));
    }
    this.vBeers = this.beers;
    this.responded = true;
  }

  processError(error: any) {
    console.error(error);
  }

  finalProcess() {
  }

}
