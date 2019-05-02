import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // OPTIONAL: Observables value-add
import { Dog } from '../dog'; // OPTIONAL: Observables value-add.
import DOGS from '../dogdata.json';
import { FavoritesService } from '../favorites.service';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  // If using the Dog import, set to: private dogData: Dog[] = DOGS;
  private dogData = DOGS;

  constructor() {}

  /**
   * Dog List
   */
  all(): Observable<Dog[]> {
    return of(this.dogData);
  }

  /**
   * Dog Detail
   * @param dogId
   * @returns a dog object from the JSON file (no likes, no favorites)
   */
  get(dogId) {
    return this.dogData.filter(dog => dog.id === dogId);
  }

  /**
   * Dog Detail
   * @param dogId
   * @returns a dog object from localStorage with ONLY likes
   */
  getLikes(dogId) {
    const likes = JSON.parse(localStorage.getItem('likes'));
    return parseInt(likes[dogId]);
  }

  update(dog) {
    const likes = JSON.parse(localStorage.getItem('likes')) || localStorage.setItem('likes', JSON.stringify({}));
    likes[dog.id] = dog.likes;
    localStorage.setItem('likes', JSON.stringify(likes));
  }
}
