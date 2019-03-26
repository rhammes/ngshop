import { Injectable } from '@angular/core';
import { Dog } from '../dog';
import DOGS from '../dogdata.json';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private dogData: Dog[] = DOGS;
  constructor() { }

  all() {
    return this.dogData;
  }
}
