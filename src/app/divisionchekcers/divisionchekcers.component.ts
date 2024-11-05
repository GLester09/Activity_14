import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divisionchekcers',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './divisionchekcers.component.html',
  styleUrl: './divisionchekcers.component.css'
})
export class DivisionchekcersComponent {
  firstNumber: number = 0; 
  secondNumber: number = 1; 
  resultMessage: string = ''; 

  checkDivisibility() {
    if (this.secondNumber === 0) {
      this.resultMessage = 'Error: Cannot divide by zero.';
    } else if (this.firstNumber % this.secondNumber === 0) {
      this.resultMessage = `${this.firstNumber} is divisible by ${this.secondNumber}.`;
    } else {
      this.resultMessage = `${this.firstNumber} is not divisible by ${this.secondNumber}.`;
    }
  }
}
