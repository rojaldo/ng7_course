import { Component, OnInit } from '@angular/core';
import { BeersService } from 'src/app/services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.scss']
})
export class BeersComponent implements OnInit {

  result: any;
  responded = true;

  constructor(private service: BeersService) { }

  ngOnInit() {
    this.service.getRequest().subscribe(
      (data) => this.processResquest(data),
      (error) => this.processError(error),
      () => this.finalProcess()
    );
  }

  processResquest(data: any) {
    this.result = data;
    this.responded = true;
  }

  processError(error: any) {
    console.error(error);
  }

  finalProcess() {
  }

}
