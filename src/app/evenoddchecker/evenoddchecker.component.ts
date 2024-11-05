import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-evenoddchecker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './evenoddchecker.component.html',
  styleUrl: './evenoddchecker.component.css'
})
export class EvenoddcheckerComponent {
number: number | null=null;
result: string | null = null;

checkEvenOrOdd(){
  if(this.number !== null){
    if(this.number % 2 === 0){
      this.result = "Even";
    } else {
      this.result = "Odd";
    }
  }else{
    this.result = "Please input valid numbers!";
  }
}
}
