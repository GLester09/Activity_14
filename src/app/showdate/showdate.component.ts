import { Component } from '@angular/core';

@Component({
  selector: 'app-showdate',
  standalone: true,
  imports: [],
  templateUrl: './showdate.component.html',
  styleUrl: './showdate.component.css'
})
export class ShowdateComponent {
date: string = '';

showDate(){
  const now =new Date();
  this.date = now.toLocaleDateString();
}
}
