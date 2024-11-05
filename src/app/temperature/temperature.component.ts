import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent {
  celsius: number | null = null;
  fahrenheit: number | null = null;

  convertToFahrenheit() {
    if (this.celsius !== null) {
      this.fahrenheit = (this.celsius * 9/5) + 32;
    }
  }

  convertToCelsius() {
    if (this.fahrenheit !== null) {
      this.celsius = (this.fahrenheit - 32) * 5/9;
    }
  }
}
