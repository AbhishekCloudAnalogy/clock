import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CalculatorComponent} from './calculator/calculator.component';
import {ClockComponent} from './clock/clock.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "clock",
    pathMatch: "full"
  },
  {
    path: "calculator",
    component: CalculatorComponent
  },
  {
    path: "clock",
    component: ClockComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
