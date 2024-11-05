import { Component } from '@angular/core';

@Component({
  selector: 'app-simpleflashlight',
  standalone: true,
  imports: [],
  templateUrl: './simpleflashlight.component.html',
  styleUrl: './simpleflashlight.component.css'
})
export class SimpleflashlightComponent {
isFlashlightOn = false;

toggleFlashlight(){
  this.isFlashlightOn = !this.isFlashlightOn;
}
}
