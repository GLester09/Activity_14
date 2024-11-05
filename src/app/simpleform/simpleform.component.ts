import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {
  userData = {
    name: '',
    contact: ''
  };

  submittedData = {
    name: '',
    contact: ''
  };

  submitted: boolean = false;

  onSubmit() {
    this.submittedData = {...this.userData};
    this.submitted = true;
  }
}
