import { Injectable } from '@angular/core';
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

  all(): Dog[] {

    return this.dogs;
  }
}
