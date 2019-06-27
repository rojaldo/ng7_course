import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card;

  constructor() { }

  ngOnInit() {
  }

  response(index: number) {
    this.card.responded = true;
    if (this.card.correctAnswer === this.card.answers[index]) {
      this.card.rightAnswer = true;
      this.card.respondedIndex = index;
    }
  }

  getClass(index: number) {
    if (!this.card.responded) {
      return 'btn btn-primary btn-lg btn-block';
    } else {
      if (index === this.card.respondedIndex && this.card.correctAnswer === this.card.answers[index]) {
        return 'btn btn-danger btn-lg btn-block disabled';
      } else if (this.card.answers[index] === this.card.correctAnswer) {
        return 'btn btn-success btn-lg btn-block disabled';
      } else {
        return 'btn btn-secondary btn-lg btn-block disabled';
      }

    }
  }

}
