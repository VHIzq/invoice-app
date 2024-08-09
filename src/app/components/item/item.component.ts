import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ItemCard } from '../../models/item-card.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  itemList: Array<ItemCard> = [
    {
      itemName: 'Shoes',
      quantity: '2',
      price: '240',
    },
    {
      itemName: 'Milk',
      quantity: '4',
      price: '20',
    },
  ];

  calculateTotalPerItem(item: ItemCard): number {
    return  Number(item.quantity) * Number(item.price);
  }
}
