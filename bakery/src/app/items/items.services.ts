import { Injectable } from '@angular/core';
import { Item } from './Items.model';

@Injectable({
  providedIn: 'root',
})
export class ItemsService {
  constructor() {}
  items: Item[] = [
    {
      itemName: 'Item1',
      itemImgs: [
        'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      ],
      itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
    },
    {
      itemName: 'Item2',
      itemImgs: [
        'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      ],
      itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
    },
    {
      itemName: 'Item3',
      itemImgs: [
        'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      ],
      itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
    },
    {
      itemName: 'Item4',
      itemImgs: [
        'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      ],
      itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
    },
    {
      itemName: 'Item5',
      itemImgs: [
        'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      ],
      itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
    },
    {
      itemName: 'Item6',
      itemImgs: [
        'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      ],
      itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
    },
    {
      itemName: 'Item7',
      itemImgs: [
        'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      ],
      itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
    },
    {
      itemName: 'Item8',
      itemImgs: [
        'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      ],
      itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
    },
    {
      itemName: 'Item9',
      itemImgs: [
        'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      ],
      itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
    },
    {
      itemName: 'Item10',
      itemImgs: [
        'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
      ],
      itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
    },
  ];

  getItems() {
    return this.items.slice();
  }
  getItem(index: number) {
    return this.items[index];
  }
}
