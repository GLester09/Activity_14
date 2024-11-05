import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-wordreverser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './wordreverser.component.html',
  styleUrl: './wordreverser.component.css'
})
export class WordreverserComponent {
word: string = '';
reversedWord: string = '';

reverseWord(){
  this.reversedWord = this.word.split('').reverse().join('');
}
}
