import { CommonModule } from '@angular/common';
import { Component, Type } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';

  calValue: number = 0;
  funcT: any = "NoFunction"
  calNumber: string= "noValue"

  firstNumber: number = 0;
  secondNumber: number = 0;

  onClickValue(value: string, type: string){
    if(type === 'number') this.onNumberClick(value)
    else{
      this.onFunctionClick(value)
    }
  }

  onFunctionClick(value: string){
     if(this.funcT === 'NoFunction'){
        this.firstNumber = this.calValue;
        this.calValue = 0;
        this.calNumber = "noValue";
        this.funcT = value;
     }
     else if(this.funcT !== 'NoFunction'){
      this.secondNumber = this.calValue;

      //calculation
      this.valueCalculate(value)
     }
  }

  valueCalculate(value: string){
    if(this.funcT === '+'){
      const temp : number = this.firstNumber + this.secondNumber;
      this.calValue = temp;
      this.firstNumber = temp;
      this.secondNumber = 0;
      this.calNumber = "noValue";
      this.funcT = "NoFunction";
    }
    if(this.funcT === '-'){
      const temp : number = this.firstNumber - this.secondNumber;
      this.calValue = temp;
      this.firstNumber = temp;
      this.secondNumber = 0;
      this.calNumber = "noValue";
      this.funcT = "NoFunction";
    }
    if(this.funcT === 'x'){
      const temp : number = this.firstNumber * this.secondNumber;
      this.calValue = temp;
      this.firstNumber = temp;
      this.secondNumber = 0;
      this.calNumber = "noValue";
      this.funcT = "NoFunction";
    }
    if(this.funcT === '/'){
      const temp : number = this.firstNumber / this.secondNumber;
      this.calValue = temp;
      this.firstNumber = temp;
      this.secondNumber = 0;
      this.calNumber = "noValue";
      this.funcT = "NoFunction";
    }
    if(this.funcT === '%'){
      const temp : number = this.firstNumber % this.secondNumber;
      this.calValue = temp;
      this.firstNumber = temp;
      this.secondNumber = 0;
      this.calNumber = "noValue";
      this.funcT = "NoFunction";
    }
    if(this.funcT === 'C'){
      this.calValue = 0;
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.calNumber = "noValue";
      this.funcT = "NoFunction";
    }
    if(this.funcT === '='){
      this.calValue = 0;
      this.firstNumber = 0;
      this.secondNumber = 0;
      this.calNumber = "noValue";
      this.funcT = "NoFunction";
    }
  }

  onNumberClick(value: string){
    if(this.calNumber !== 'noValue'){
      this.calNumber = this.calNumber + value;
    }else{
      this.calNumber = value;
    }

    this.calValue = parseFloat(this.calNumber)
  }
}
