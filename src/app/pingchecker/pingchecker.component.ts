import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pingchecker',
  standalone: true,
  imports: [FormsModule, NgIf,NgFor],
  templateUrl: './pingchecker.component.html',
  styleUrl: './pingchecker.component.css'
})
export class PingcheckerComponent {
 ping: number = 0;
 result: string = '';

 checkPing(): void {
  if (this.ping <= 4) {
    this.result = 'Your ping is very good';
  } else if (this.ping <=20){
    this.result = "Your ping is still in good condition";
  } else if (this.ping <= 50) {
    this.result = 'You may experience slight lag';
  } else {
    this.result = "You may experience very lag and slow internet"
  }
 }
}
