import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {
fnumber: number | null = null;
snumber: number | null = null;
answer: number | string | null = null;

calculate(operation: string){
  if (this.fnumber !== null && this.snumber !== null) {
    switch (operation){
      case 'add':
      this.answer = this.fnumber + this.snumber;
      break;
      case 'subtract':
      this.answer = this.fnumber - this.snumber;
      break;
      case 'multiply':
      this.answer = this.fnumber * this.snumber;
      break;
      case 'divide':
        if (this.snumber == 0) {
          this.answer ="Invalid";
        } else {
          this.answer = this.fnumber/this.snumber;
        }
        break;
    }
  } else {
    this.answer = 'Please enter numbers';
  }
}
}
