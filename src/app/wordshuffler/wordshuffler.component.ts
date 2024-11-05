import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wordshuffler',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './wordshuffler.component.html',
  styleUrl: './wordshuffler.component.css'
})
export class WordshufflerComponent {
  inputWord: string = '';
  shuffledWord: string = '';

  shuffleLetters() {
    if (!this.inputWord) {
      this.shuffledWord = ''; 
      return;
    }

    const wordArray = this.inputWord.split(''); 
    for (let i = wordArray.length - 1; i > 0; i--) {

      const j = Math.floor(Math.random() * (i + 1));
      [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    this.shuffledWord = wordArray.join('');
  }
}
