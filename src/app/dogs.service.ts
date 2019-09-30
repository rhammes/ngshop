import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Dog } from './dog';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  dogs: Dog[] = [];

  constructor() {
     const dogsObj = [
       { "id": "4ziNJuYbfDius", "name": "relaxed bull dog GIF", "thumbnail": "https://media0.giphy.com/media/4ziNJuYbfDius/100.gif", "image": "https://media0.giphy.com/media/4ziNJuYbfDius/giphy.gif" }, 
       { "id": "UlQI7xt5R2iuk", "name": "bull dog sleeping GIF", "thumbnail": "https://media3.giphy.com/media/UlQI7xt5R2iuk/100.gif", "image": "https://media3.giphy.com/media/UlQI7xt5R2iuk/giphy.gif" }
     ];
//    const dogsObj = require('./dogdata.json');
    this.dogs = dogsObj.map((dog) => {
      return new Dog(dog);
    })

  }

  all(): Observable<Dog[]> {

    return of(this.dogs);
  }
}
