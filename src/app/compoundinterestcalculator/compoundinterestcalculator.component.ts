import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-compoundinterestcalculator',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor,CommonModule],
  templateUrl: './compoundinterestcalculator.component.html',
  styleUrl: './compoundinterestcalculator.component.css'
})
export class CompoundinterestcalculatorComponent {
  principal: number = 0;  
  rate: number = 0;          
  time: number = 0;         
  frequency: number = 1;      
  compoundInterest: number | null = null;  
  amount: number | null = null;     

  calculateCompoundInterest() {
    if (this.principal <= 0 || this.rate <= 0 || this.time <= 0 || this.frequency <= 0) {
      alert("Please enter valid values for all fields.");
      return;
    }

    const rateDecimal = this.rate / 100;

    const amount = this.principal * Math.pow(1 + rateDecimal / this.frequency, this.frequency * this.time);
    
    this.compoundInterest = amount - this.principal;
    this.amount = amount;
  }
}
