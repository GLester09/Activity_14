import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guesscolor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './guesscolor.component.html',
  styleUrl: './guesscolor.component.css'
})
export class GuesscolorComponent {
userColor: string = '';
result: string = '';

colors = [
  'Yellow',
  'Orange',
  'Blue',
  'Green',
  'Purple',
  'Brown',
  'Gray',
  'Red',
  'Pink',
  'White',
  'Black'];

  checkColor(): void {
    const randomColor = this.colors[Math.floor(Math.random() * this.colors.length)];
    if (this.userColor.toLowerCase() === randomColor) {
      this.result = 'Congratulations! You guessed the color:!';
    } else{
      this.result = "Sorry, you didn't get the correct color, Please ty again!";
    }
  }
}
