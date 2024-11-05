import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-appealform',
  standalone: true,
  imports: [FormsModule, NgFor,NgIf],
  templateUrl: './appealform.component.html',
  styleUrl: './appealform.component.css'
})
export class AppealformComponent {
appealForm!: FormGroup;
appealSent = false;

constructor(){
}

ngOnInit(): void {
  this.appealForm = new FormGroup({
    appealName: new FormControl('', Validators.required),
    appealDescription: new FormControl('', Validators.required)
  });
}
onSubmit(): void {
  console.log('Form submitted');
  this.appealSent =true;
}
}
