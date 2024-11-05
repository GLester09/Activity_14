import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-divisiontable',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf],
  templateUrl: './divisiontable.component.html',
  styleUrl: './divisiontable.component.css'
})
export class DivisiontableComponent {
num: number = 0;
table: {num: number, result: string}[]=[];

generateTable(): void {
  this.table = [];
  for (let i = 1; i <= 10; i++) {
  }
  }
}
