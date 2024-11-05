import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf} from '@angular/common';

@Component({
  selector: 'app-userage',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './userage.component.html',
  styleUrl: './userage.component.css'
})
export class UserageComponent {
  birthYear: number |null=null;
  age:number |null=null;

  calculateAge() {
    if (this.birthYear !== null){
      const currentYear = new Date().getFullYear();
      this.age = currentYear - this.birthYear;
    }
  }
}
