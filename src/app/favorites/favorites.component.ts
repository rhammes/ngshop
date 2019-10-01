import { Component, OnInit } from '@angular/core';
import { Favorite } from '../favorite';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorite: Favorite;
  
  constructor() {
    this.favorite = new Favorite();
  }

  ngOnInit() {
  }

}
