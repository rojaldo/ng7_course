import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-trivial',
  templateUrl: './trivial.component.html',
  styleUrls: ['./trivial.component.scss']
})
export class TrivialComponent implements OnInit {

  result: any;
  cards: Card[] = [];

  constructor(private service: BeersService) { }

  ngOnInit() {
    this.service.getRequest('https://opentdb.com/api.php?amount=10').subscribe(
      (data) => this.getData(data)
    );
  }

  getData(data) {
    this.result = data;
    for (const card of data.results) {
      this.cards.push(new Card(card));
    }
  }

}
