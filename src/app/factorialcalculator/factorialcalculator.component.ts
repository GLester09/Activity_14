import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-factorialcalculator',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './factorialcalculator.component.html',
  styleUrl: './factorialcalculator.component.css'
})
export class FactorialcalculatorComponent {
  number: number | null = null;
  factorial: number | null = null; 

  calculateFactorial() {
    if (this.number !== null && this.number >= 0) {
      this.factorial = this.factorialOf(this.number);
    } else {
      this.factorial = null;
    }
  }

  factorialOf(n: number): number {
    if (n === 0 || n === 1) {
      return 1;
    }
    return n * this.factorialOf(n - 1);
  }
}
