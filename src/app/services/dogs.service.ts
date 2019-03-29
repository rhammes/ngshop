import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // OPTIONAL: Observables value-add
import { Dog } from '../dog'; // OPTIONAL: Observables value-add.
import DOGS from '../dogdata.json';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  // If using the Dog import, set to: private dogData: Dog[] = DOGS;
  private dogData = DOGS;
  constructor() { }

  all(): Observable<Dog[]> {
    return of(this.dogData);
  }

  get(dogId) {
    return this.dogData.filter(dog => dog.id === dogId);
  }
}
