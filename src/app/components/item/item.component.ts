import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { ItemCard } from '../../models/item-card.model';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogItemComponent } from '../delete-dialog-item/delete-dialog-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, CommonModule],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent implements OnChanges {
  @Input()
  itemAdded!: ItemCard;

  @Output()
  onEditingItem = new EventEmitter<ItemCard>();

  constructor(private dialog: MatDialog) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.addNewItem();
  }

  itemList: Array<ItemCard> = [
    {
      itemId: '2324',
      itemName: 'Shoes',
      quantity: '2',
      price: '240',
    },
  ];

  editingItem = {
    itemId: '2324',
    itemName: 'Shoes',
    quantity: '2',
    price: '240',
  };

  handleEditingItem(itemId: string) {
    this.deleteItem(itemId);
    this.onEditingCard();
  }

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
      const isDeleteAction = confirmDelete?.reason === 'deleteAction';
      if (isDeleteAction) {
        this.deleteItem(itemId);
      }
    });
  }

  private onEditingCard() {
    if (this.itemAdded) {
      this.onEditingItem.emit(this.itemAdded);
      console.log(this.itemAdded);
    }
  }

  private deleteItem(idItem: string) {
    this.itemList = this.itemList.filter((item) => item.itemId !== idItem);
  }

  private addNewItem() {
    if (this.itemAdded) {
      this.itemList.push(this.itemAdded);
    }
  }
}
