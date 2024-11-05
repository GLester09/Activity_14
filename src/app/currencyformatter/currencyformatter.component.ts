import { style } from '@angular/animations';
import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currencyformatter',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './currencyformatter.component.html',
  styleUrl: './currencyformatter.component.css'
})
export class CurrencyformatterComponent {
amount:number|null=null;
currencyType: string = 'USD';
formattedCurrency: string|null=null;

formatCurrency(): void{
  if(this.amount !== null){
    let options:Intl.NumberFormatOptions = {
      style:'currency',
      currency:this.currencyType
    };
    try{
      this.formattedCurrency = new Intl.NumberFormat('en-US', options).format(this.amount);
    }
    catch (e){
      this.formattedCurrency = 'Invalid currency format';
    }
  } else {
    this.formattedCurrency = null;
  }
}
}
