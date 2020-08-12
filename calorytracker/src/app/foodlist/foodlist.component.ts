import { Component, OnInit } from '@angular/core';
import { items } from './../item'
import { FoodItems } from './../food-items';
import { from } from 'rxjs';
@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
  items: FoodItems[];
  newItem: any = {};
  constructor() { }

  ngOnInit(): void {
    this.items = items;
  }
  addcount(count, obj): any {
    obj.count += parseInt(count);
  }
}
