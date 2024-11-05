import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-displayname',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './displayname.component.html',
  styleUrl: './displayname.component.css'
})
export class DisplaynameComponent {
name: string = "";
displayname: string = "";

show(){
  this.displayname = this.name
}
}
