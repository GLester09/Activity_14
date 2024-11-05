import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-uppercaseconverter',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './uppercaseconverter.component.html',
  styleUrl: './uppercaseconverter.component.css'
})
export class UppercaseconverterComponent {
  inputString: string = '';
  uppercasedString: string = ''; 

  convertToUppercase() {
    this.uppercasedString = this.inputString.toUpperCase();
  }
}
