import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { DisplayComponent } from './components/display/display.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';
import { CalculatorService } from './services/calculator.service';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BeersComponent } from './components/beers/beers.component';
import { HttpClientModule } from '@angular/common/http';
import { BeersService } from './services/beers.service';
import { ApodComponent } from './components/apod/apod.component';
import { Ng5SliderModule } from 'ng5-slider';
import { AlcoholPipe } from './pipes/alcohol.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    BeersComponent,
    ApodComponent,
    AlcoholPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    Ng5SliderModule
  ],
  providers: [
    CalculatorService,
    BeersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
