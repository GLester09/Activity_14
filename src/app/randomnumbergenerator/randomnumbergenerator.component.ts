import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-randomnumbergenerator',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './randomnumbergenerator.component.html',
  styleUrl: './randomnumbergenerator.component.css'
})
export class RandomnumbergeneratorComponent {
  min: number = 1; 
  max: number = 100; 
  randomNumber: number | null = null; 

  generateRandomNumber() {
    if (this.min >= this.max) {
      alert('Please ensure the minimum is less than the maximum value.');
      return;
    }
    this.randomNumber = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  }
}
