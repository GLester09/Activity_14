import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-wordcounter',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './wordcounter.component.html',
  styleUrl: './wordcounter.component.css'
})
export class WordcounterComponent {
  inputText: string = ''; 
  wordCount: number = 0; 

  countWords() {
    if (this.inputText.trim() === '') {
      this.wordCount = 0; 
    } else {
      
      this.wordCount = this.inputText.trim().split(/\s+/).length;
    }
  }
}
