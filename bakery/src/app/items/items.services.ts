import {Injectable} from '@angular/core'

@Injectable({
    providedIn:('root')
})
export class ItemsService{
    constructor(){}
    items = [
        {
          itemName: 'Item1',
          imgLink:
            'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
          itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
        },
        {
          itemName: 'Item2',
          imgLink:
            'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
          itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
        },
        {
          itemName: 'Item3',
          imgLink:
            'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
          itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
        },
        {
          itemName: 'Item4',
          imgLink:
            'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
          itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
        },
        {
          itemName: 'Item5',
          imgLink:
            'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
          itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
        },
        {
          itemName: 'Item6',
          imgLink:
            'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
          itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
        },
        {
          itemName: 'Item7',
          imgLink:
            'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
          itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
        },
        {
          itemName: 'Item8',
          imgLink:
            'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
          itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
        },
        {
          itemName: 'Item9',
          imgLink:
            'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
          itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
        },
        {
          itemName: 'Item10',
          imgLink:
            'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80',
          itemDesc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      Perspiciatis, exercitationem modi quisquam consectetur necessitatibus
      reprehenderit?`,
        },
      ];

      getItems(){
        return this.items.slice();
      }
}