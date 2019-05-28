import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LocationStrategy} from '@angular/common';
import {SalesforceHashLocationStrategy} from './util/sf-path-location-strategy';
import { CalculatorComponent } from './calculator/calculator.component';
import { ClockComponent } from './clock/clock.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: SalesforceHashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
