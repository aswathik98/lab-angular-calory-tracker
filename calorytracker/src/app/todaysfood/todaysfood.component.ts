import { Component, OnInit } from '@angular/core';
import {items} from './../item';
import { FoodItems } from './../food-items';

@Component({
  selector: 'app-todaysfood',
  templateUrl: './todaysfood.component.html',
  styleUrls: ['./todaysfood.component.css']
})
export class TodaysfoodComponent implements OnInit {
  items: FoodItems[];
  newItem: any = {};
  constructor() { }

  ngOnInit(): void {
    this.items = items;
  }
  addCount(count, item): any {
    item.count += count;
  }

}
