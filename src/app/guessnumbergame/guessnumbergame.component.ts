import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guessnumbergame',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './guessnumbergame.component.html',
  styleUrl: './guessnumbergame.component.css'
})
export class GuessnumbergameComponent {
  randomNumber: number = 0; 
  guess: number | null = null; 
  message: string = ''; 
  attempts: number = 0; 


  startNewGame() {
    this.randomNumber = Math.floor(Math.random() * 100) + 1;
    this.guess = null;
    this.message = '';
    this.attempts = 0;
  }

  checkGuess() {
    if (this.guess === null || this.guess < 1 || this.guess > 100) {
      this.message = 'Please enter a valid number between 1 and 100.';
      return;
    }

    this.attempts++;

    if (this.guess < this.randomNumber) {
      this.message = 'Too low! Try again.';
    } else if (this.guess > this.randomNumber) {
      this.message = 'Too high! Try again.';
    } else {
      this.message = `Congratulations! You guessed the number in ${this.attempts} attempts.`;
    }
  }

  ngOnInit() {
    this.startNewGame();
  }
}
