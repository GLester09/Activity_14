import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-palindromechecker',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './palindromechecker.component.html',
  styleUrl: './palindromechecker.component.css'
})
export class PalindromecheckerComponent {
  inputText: string = '';
  isPalindrome: boolean | null = null;

  checkPalindrome(): void {
    const cleanedInput = this.inputText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    this.isPalindrome = cleanedInput === cleanedInput.split('').reverse().join('');
  }
}
