import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shoppinglist',
  standalone: true,
  imports: [FormsModule,NgIf,NgFor],
  templateUrl: './shoppinglist.component.html',
  styleUrl: './shoppinglist.component.css'
})
export class ShoppinglistComponent {
  item: string = '';
  shoppingList: string[] = [];

  addItem() {
    if (this.item.trim()) {
      this.shoppingList.push(this.item.trim());
      this.item = '';
    }
  }

  removeItem(index: number) {
    this.shoppingList.splice(index, 1);
  }
}
