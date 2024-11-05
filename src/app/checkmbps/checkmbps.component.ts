import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkmbps',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './checkmbps.component.html',
  styleUrl: './checkmbps.component.css'
})
export class CheckmbpsComponent {
  mbps: number = 0;
  result: string ='';

  checkMBPS(): void {
    if (this.mbps >= 100){
      this.result = "Your internet speed is Normal";
    } else{
      this.result = "Your internet speed is Slow";
    }
  }
}
