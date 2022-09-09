import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Item } from '../Items.model';
import { ItemsService } from '../items.services';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss'],
})
export class ItemDetailsComponent implements OnInit {
  item!: Item;
  id!: number;
  constructor(
    private route: ActivatedRoute,
    private itemService: ItemsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.item = this.itemService.getItem(this.id);
    });
  }
}
