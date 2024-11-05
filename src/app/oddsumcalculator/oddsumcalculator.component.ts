import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-oddsumcalculator',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './oddsumcalculator.component.html',
  styleUrl: './oddsumcalculator.component.css'
})
export class OddsumcalculatorComponent {
  number: number = 0;        
  sumOfOddNumbers: number = 0; 

  calculateSumOfOddNumbers() {
    if (this.number <= 0) {
      alert("Please enter a positive number.");
      return;
    }

    let sum = 0;
    for (let i = 1; i <= this.number; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }

    this.sumOfOddNumbers = sum;
  }
}
