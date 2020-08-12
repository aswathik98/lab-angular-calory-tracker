import { Component, OnInit } from '@angular/core';
import { items } from './../item';
import { FoodItems } from './../food-items';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  items: FoodItems[];
  newItem: any = {};
  constructor() { }

  ngOnInit(): void {
    this.items = items;
  }
  addItem(newItem): any {
    console.log('Add item has been called');
    console.log(newItem);
    newItem.count = 0;
    this.items.unshift(newItem);
  }
}
