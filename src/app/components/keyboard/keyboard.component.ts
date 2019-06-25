import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculatorService } from 'src/app/services/calculator.service';

enum State { init, firstFigure, secondFigure, result }

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  @Output() signal = new EventEmitter<string>();

  constructor(private service: CalculatorService) { }

  ngOnInit() {
  }

  handleNumber(num: number) {
    switch (this.service.currentState) {
      case State.init:
        this.service.firstFigure = num;
        this.service.display += num;
        this.signal.emit(this.service.display);
        this.service.currentState = State.firstFigure;
        break;
      case State.firstFigure:
        this.service.firstFigure = this.service.firstFigure * 10 + num;
        this.service.display += num;
        this.signal.emit(this.service.display);
        break;
      case State.secondFigure:
        this.service.secondFigure = this.service.secondFigure * 10 + num;
        this.service.display += num;
        this.signal.emit(this.service.display);
        break;
      case State.result:
        this.service.firstFigure = num;
        this.service.secondFigure = 0;
        this.service.operator = '';
        this.service.result = 0;
        this.service.display = '' + num;
        this.signal.emit(this.service.display);
        this.service.currentState = State.firstFigure;
        break;
      default:
        break;
    }
  }

  handleSymbol(symbol: string) {
    console.log(this.service.currentState);
    switch (this.service.currentState) {
      case State.firstFigure:
        if (this.service.isOperator(symbol)) {
          this.service.operator = symbol;
          this.service.display += symbol;
          this.signal.emit(this.service.display);
          this.service.currentState = State.secondFigure;
        }
        break;
      case State.secondFigure:
        if (symbol === '=') {
          this.service.result = this.service.resolve();
          this.service.display = this.service.display + '=' + this.service.result;
          this.signal.emit(this.service.display);
          this.service.currentState = State.result;
        }
        break;
      case State.result:
        if (this.service.isOperator(symbol)) {
          this.service.firstFigure = this.service.result;
          this.service.operator = symbol;
          this.service.secondFigure = 0;
          this.service.result = 0;
          this.service.display = this.service.firstFigure + this.service.operator;
          this.signal.emit(this.service.display);
          this.service.currentState = State.secondFigure;
        }
        break;
      default:
        break;
    }
  }

}
