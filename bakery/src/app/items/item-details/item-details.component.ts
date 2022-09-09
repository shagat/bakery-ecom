import { Component, OnInit } from '@angular/core';
import { Item } from '../Items.model';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {
item!: Item[];
  constructor() { }

  ngOnInit(): void {
  }

}
