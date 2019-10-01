import { Component, OnInit } from '@angular/core';
import { Favorite } from '../favorite';
import { Dog } from '../dog';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favorite: Favorite;
  
  constructor() {
    this.favorite = new Favorite();

    const dog1: Dog = new Dog();
    const dog2: Dog = new Dog();
    dog1.id = "dog1";
    dog1.name = "Name Dog1";
    dog2.id = "dog2";
    dog2.name = "Name Dog2";
    this.favorite.toggleDog(dog1);
    this.favorite.toggleDog(dog2);

  }

  ngOnInit() {
  }

}
