import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../Items.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() item!: Item ;
@Input() index!: number ;
  constructor() { }

  ngOnInit(): void {
  }

}
