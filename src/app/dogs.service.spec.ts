import { TestBed } from '@angular/core/testing';

import { DogsService } from './dogs.service';
import { Dog } from './dog';


describe('DogsService', () => {
  //let testData: Dog[];


  beforeEach(() => {
    TestBed.configureTestingModule({})
    // testData = [
    //   { "id": "4ziNJuYbfDius", "name": "relaxed bull dog GIF", "thumbnail": "https://media0.giphy.com/media/4ziNJuYbfDius/100.gif", "image": "https://media0.giphy.com/media/4ziNJuYbfDius/giphy.gif" }, 
    //   { "id": "UlQI7xt5R2iuk", "name": "bull dog sleeping GIF", "thumbnail": "https://media3.giphy.com/media/UlQI7xt5R2iuk/100.gif", "image": "https://media3.giphy.com/media/UlQI7xt5R2iuk/giphy.gif" }
    // ];

  });

  it('should be created', () => {
    const service: DogsService = TestBed.get(DogsService);
    expect(service).toBeTruthy();
  });

  describe('all()', () => {

    it('should return all pooches', () => {
      const expectedCount: number = 100;
      const service: DogsService = TestBed.get(DogsService);
      expect(service.all().length).toEqual(expectedCount);
    });

  });


});
