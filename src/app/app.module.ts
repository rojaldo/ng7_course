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
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { ShowApodComponent } from './components/show-apod/show-apod.component';
import { TrivialComponent } from './components/trivial/trivial.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    DisplayComponent,
    KeyboardComponent,
    BeersComponent,
    ApodComponent,
    AlcoholPipe,
    ShowApodComponent,
    TrivialComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    Ng5SliderModule,
    NgxYoutubePlayerModule
  ],
  providers: [
    CalculatorService,
    BeersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
