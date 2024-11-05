import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-showusername',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './showusername.component.html',
  styleUrl: './showusername.component.css'
})
export class ShowusernameComponent {
username: string = '';
message: string = '';

displayUserName(){
  this.message = this.username;
}
}
