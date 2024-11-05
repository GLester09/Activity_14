import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-uppercasegreeting',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './uppercasegreeting.component.html',
  styleUrl: './uppercasegreeting.component.css'
})
export class UppercasegreetingComponent {
  name: string = ''; 
  uppercaseName: string = '';

  convertToUppercase() {
    this.uppercaseName = this.name.toUpperCase();
  }
}
