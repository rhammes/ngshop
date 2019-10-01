import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Dog } from './dog';

import dogsObj from './dogdata.json';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  dogs: Dog[] = [];

  constructor() {
    this.dogs = dogsObj.map((dog) => {
      return new Dog(dog);
    })
  }

  all(): Observable<Dog[]> {

    return of(this.dogs);
  }
}
