import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  favorites: Dog[];

  constructor() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')) || localStorage.setItem('favorites', JSON.stringify([]));
  }

  all(): Observable<Dog[]> {
    return of(this.favorites);
  }

  update(dog) {
    const userFavs = this.favorites;
    userFavs.push(dog);
    localStorage.setItem('favorites', JSON.stringify(userFavs));
  }
}
