import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-currencyconverter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './currencyconverter.component.html',
  styleUrl: './currencyconverter.component.css'
})
export class CurrencyconverterComponent {
  amount: number | null = null;
  convertedAmount: number | null = null;
  exchangeRate: number = 57;

  convertCurrency(){
    if(this.amount !== null){
      this.convertedAmount = this.amount * this.exchangeRate;
    }
  }
}
