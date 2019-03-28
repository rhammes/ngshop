import { Injectable } from '@angular/core';
// import { Dog } from '../dog'; // OPTIONAL: Lesson value-add.
import DOGS from '../dogdata.json';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  // If using the Dog import, set to: private dogData: Dog[] = DOGS;
  private dogData = DOGS;
  constructor() { }

  all() {
    return this.dogData;
  }

  get(dogId) {
    return this.dogData.filter(dog => dog.id === dogId);
  }
}
