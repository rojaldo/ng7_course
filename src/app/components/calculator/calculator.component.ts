import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  display = '';

  constructor() { }

  ngOnInit() {
  }

  handleSignal(disp: string) {
    this.display = disp;
  }

}
