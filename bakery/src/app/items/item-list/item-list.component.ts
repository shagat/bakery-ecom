import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.services';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  items!: { itemName: string; imgLink: string; itemDesc: string }[];
  constructor(private ItemsService: ItemsService) {}

  ngOnInit(): void {
    this.items = this.ItemsService.getItems();
  }
}
