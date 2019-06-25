import { Injectable } from '@angular/core';

enum State { init, firstFigure, secondFigure, result }

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  display = '';

  currentState = State.init;
  firstFigure = 0;
  secondFigure = 0;
  operator = '';
  result = 0;

  constructor() { }

  isOperator(symbol: string): boolean {
    const operators = ['+', '-', '*', '/'];

    for (const operator of operators) {
      if (operator === symbol) {
        return true;
      }
    }
    return false;
  }

  resolve() {
    switch (this.operator) {
      case '+':
        return this.firstFigure + this.secondFigure;
      case '-':
        return this.firstFigure - this.secondFigure;
      case '*':
        return this.firstFigure * this.secondFigure;
      case '/':
        return this.firstFigure / this.secondFigure;

      default:
        break;
    }
  }

}
