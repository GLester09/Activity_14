import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multiplicationchecker',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './multiplicationchecker.component.html',
  styleUrl: './multiplicationchecker.component.css'
})
export class MultiplicationcheckerComponent {
  number1: number = 0;
  number2: number = 1; 
  isMultiple: boolean | null = null;

 
  checkIfMultiple() {
    if (this.number2 === 0) {
      this.isMultiple = false; 
      return;
    }
    this.isMultiple = this.number1 % this.number2 === 0;
  }
}
