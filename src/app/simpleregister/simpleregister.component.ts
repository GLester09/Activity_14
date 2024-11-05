import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simpleregister',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './simpleregister.component.html',
  styleUrl: './simpleregister.component.css'
})
export class SimpleregisterComponent {
  email: string = '';
  password: string ='';
  isRegistered: boolean = false;

  register(){
    console.log("Registering user with email and password");
    this.isRegistered = true;
  }
}
