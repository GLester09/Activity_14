import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-textlegnth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './textlegnth.component.html',
  styleUrl: './textlegnth.component.css'
})
export class TextlegnthComponent {
inputString: string = '';
length: number | null=null;

calculateLength(){
  this.length = this.inputString.length;
}
}
