import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-usergreeting',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usergreeting.component.html',
  styleUrl: './usergreeting.component.css'
})
export class UsergreetingComponent {
  userName: string = '';
  greeting: string = '';

  displayGreeting(){
    this.greeting = 'Hello!';
  }
}
