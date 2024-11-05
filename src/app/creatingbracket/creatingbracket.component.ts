import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-creatingbracket',
  standalone: true,
  imports: [FormsModule,NgClass,NgIf],
  templateUrl: './creatingbracket.component.html',
  styleUrl: './creatingbracket.component.css'
})
export class CreatingbracketComponent {
  inputText: string = '';
  matchedBrackets: { [key: number]: string } = {};
  isValid: boolean = true; 

  checkBrackets() {
    this.matchedBrackets = {};
    this.isValid = true;

    const stack: number [] = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];

    for (let i = 0; i < this.inputText.length; i++) {
      const char = this.inputText[i];

      if (openingBrackets.includes(char)) {
        stack.push(i);
      } else if (closingBrackets.includes(char)) {
        if (stack.length === 0) {
          this.isValid = false; 
          return;
        }
        const lastOpeningIndex = stack.pop()!;
      }
    }

    if (stack.length > 0) {
      this.isValid = false; 
    }
  }
}
