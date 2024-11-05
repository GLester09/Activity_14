import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usernamevalidator',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, NgClass],
  templateUrl: './usernamevalidator.component.html',
  styleUrl: './usernamevalidator.component.css'
})
export class UsernamevalidatorComponent {
  username: string = ''; 
  validationMessage: string = ''; 
  isValid: boolean = false; 

  validateUsername() {

    this.validationMessage = '';
    this.isValid = false;

    if (this.username.length < 5 || this.username.length > 15) {
      this.validationMessage = 'Username must be between 5 and 15 characters long.';
      return;
    }

    if (!/^[a-zA-Z]/.test(this.username)) {
      this.validationMessage = 'Username must start with a letter.';
      return;
    }


    if (!/^[a-zA-Z0-9]+$/.test(this.username)) {
      this.validationMessage = 'Username can only contain letters and numbers.';
      return;
    }

    this.isValid = true;
    this.validationMessage = 'Username is valid!';
  }
}
