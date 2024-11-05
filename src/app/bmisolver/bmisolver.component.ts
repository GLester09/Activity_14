import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmisolver',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor,CommonModule],
  templateUrl: './bmisolver.component.html',
  styleUrl: './bmisolver.component.css'
})
export class BmisolverComponent {
  height: number = 0;
  weight: number = 0;
  bmi: number | null = null; 
  category: string = ''; 

  calculateBMI() {
    if (this.height <= 0 || this.weight <= 0) {alert('Please enter valid height and weight.');return;}

    this.bmi = this.weight / (this.height * this.height);


    if (this.bmi < 18.5) {
      this.category = 'Underweight';
    } else if (this.bmi >= 18.5 && this.bmi < 24.9) {
      this.category = 'Normal weight';
    } else if (this.bmi >= 25 && this.bmi < 29.9) {
      this.category = 'Overweight';
    } else {
      this.category = 'Obese';
    }
  }
}
