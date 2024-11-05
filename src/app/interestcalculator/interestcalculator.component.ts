import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-interestcalculator',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor, CommonModule],
  templateUrl: './interestcalculator.component.html',
  styleUrl: './interestcalculator.component.css'
})
export class InterestcalculatorComponent {
  principal: number = 0;   
  rate: number = 0;       
  time: number = 0;       
  interest: number | null = null;  


  calculateSimpleInterest() {
   
    if (this.principal <= 0 || this.rate <= 0 || this.time <= 0) {
      alert("Please enter valid values for all fields.");
      return;
    }
    this.interest = (this.principal * this.rate * this.time) / 100;
  }
}
