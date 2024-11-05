import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-charactercounter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './charactercounter.component.html',
  styleUrl: './charactercounter.component.css'
})
export class CharactercounterComponent {
  inputText: string = '';
  characterCount: number = 0;

  updateCount(): void {
    this.characterCount = this.inputText.length;
  }
}
