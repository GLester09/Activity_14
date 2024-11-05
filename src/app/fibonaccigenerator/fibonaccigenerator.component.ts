import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fibonaccigenerator',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './fibonaccigenerator.component.html',
  styleUrl: './fibonaccigenerator.component.css'
})
export class FibonaccigeneratorComponent {
  n: number = 0;   
  fibonacciSequence: number[] = [];

  generateFibonacci() {
    if (this.n <= 0) {
      alert("Please enter a positive number.");
      return;
    }

    let fib = [0, 1];

    for (let i = 2; i < this.n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }

    this.fibonacciSequence = fib.slice(0, this.n);
  }
}
