import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  operation: string = '';
  result: string = '';

  append(element: string){
    this.operation += element;
  }

  evaluate(){
    try {
      this.result = eval(this.operation);
    }
    catch(e) {
      alert('cannot evaluate expression');
    }
  }

  undo() {
    if (this.operation != ''){
      this.operation = this.operation.slice(0, -1)
    }
  }

  clear(){

    this.operation = '';
  }
}


