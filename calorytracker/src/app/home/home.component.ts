import { Component, OnInit } from '@angular/core';
import { items } from  './../item';
import { FoodItems } from './../food-items'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: FoodItems[];
  newItem: any = {};
  constructor() {}

  ngOnInit(): void {
    this.items = items;
  }
  
  }
