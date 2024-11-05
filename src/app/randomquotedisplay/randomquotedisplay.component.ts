import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-randomquotedisplay',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor,CommonModule],
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "Huwag mong sukuan ang mga pangarap mo, dahil sa bawat pagsubok ay may aral na matututunan.",
    "Walang imposible sa taong may malasakit at determinasyon.",
    "Huwag mong gawing hadlang ang iyong kahinaan. Ang tunay na lakas ay matatagpuan sa loob.",
    "Magtiwala sa sarili, at siguradong makakamtan mo ang iyong mga pangarap.",
    "Laging tandaan na sa kabila ng dilim, may liwanag na naghihintay.",
    "Don't watch the clock; do what it does. Keep going.— Sam Levenson",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. – Martin Luther King Jr.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "You are never too old to set another goal or to dream a new dream.— C.S. Lewis",
    "The future belongs to those who believe in the beauty of their dreams.— Eleanor Roosevelt",
    "It always seems impossible until it's done.— Nelson Mandela",
    "The only limit to our realization of tomorrow is our doubts of today.— Franklin D. Roosevelt",
    "Opportunities don't happen, you create them.— Chris Grosser"
  ];
  currentQuote: string = '';

  generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.currentQuote = this.quotes[randomIndex];
  }
}
