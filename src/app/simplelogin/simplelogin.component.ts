import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-simplelogin',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './simplelogin.component.html',
  styleUrl: './simplelogin.component.css'
})
export class SimpleloginComponent {
email: string = '';
password: string = '';
message: string = '';

login(){
  if (this.email && this.password){
    this.message = "Successfully Logged In";
  } else {
    this.message = "Please enter email and password correctly!";
  }
}
}
