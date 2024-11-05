import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-fahrenheittocelcius',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './fahrenheittocelcius.component.html',
  styleUrl: './fahrenheittocelcius.component.css'
})
export class FahrenheittocelciusComponent {
fahrenheit: number | null = null;
celcius: number | null = null;

convertToCelcius(){
  if(this.fahrenheit !== null){
    this.celcius = (this.fahrenheit - 32) * 5/9;
  }
}
}
