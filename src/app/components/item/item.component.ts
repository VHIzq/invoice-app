import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ItemCard } from '../../models/item-card.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogItemComponent } from '../delete-dialog-item/delete-dialog-item.component';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  
  @Input()
  itemAdded?: any;
  
  constructor(private dialog: MatDialog) {}

  deleteItem(idItem: string) {
    console.log('item deleted,', idItem);
    this.itemList = this.itemList.filter((item) => item.itemId !== idItem);
  }

  itemList: Array<ItemCard> = [
    {
      itemId: '2324',
      itemName: 'Shoes',
      quantity: '2',
      price: '240',
    },
    {
      itemId: '2356',
      itemName: 'Milk',
      quantity: '4',
      price: '20',
    },
  ];

  calculateTotalPerItem(item: ItemCard): number {
    return Number(item.quantity) * Number(item.price);
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    itemId: string
  ): void {
    const dialogRef = this.dialog.open(DeleteDialogItemComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe((confirmDelete) => {
      if (confirmDelete?.reason === 'deleteAction') {
        this.deleteItem(itemId);
        console.log('list after delete', this.itemList);
      }
    });
  }
}
