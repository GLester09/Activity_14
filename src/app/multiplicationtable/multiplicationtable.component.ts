import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf} from '@angular/common';
@Component({
  selector: 'app-multiplicationtable',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './multiplicationtable.component.html',
  styleUrl: './multiplicationtable.component.css'
})
export class MultiplicationtableComponent {
inputNumber: number | null = null;
multiplicationTable: number [] = [];
generateTable(){
  if (this.inputNumber !== null) {
    this.multiplicationTable = [];
    for (let i= 1; i<= 10; i++){
      this.multiplicationTable.push(this.inputNumber*i);
    }
  }
}
}
