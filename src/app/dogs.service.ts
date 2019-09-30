import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Dog } from './dog';
import { request } from 'https';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  dogs: Dog[] = [];

  constructor() {
    const dogsObj = require('./dogdata.json');
    this.dogs = dogsObj.map((dog) => {
      return new Dog(dog);
    })
  }

  all(): Observable<Dog[]> {

    return of(this.dogs);
  }
}
