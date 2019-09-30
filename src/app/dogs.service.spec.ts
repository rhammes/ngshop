import { TestBed } from '@angular/core/testing';

import { DogsService } from './dogs.service';
import { Dog } from './dog';


describe('DogsService', () => {
   beforeEach(() => {
    TestBed.configureTestingModule({})
  });

  it('should be created', () => {
    const service: DogsService = TestBed.get(DogsService);
    expect(service).toBeTruthy();
  });

  describe('all()', () => {

    it('should return all pooches', (done) => {
      const expectedCount: number = 100;
      const service: DogsService = TestBed.get(DogsService);
      service.all().subscribe((data) =>
       {
        expect(data.length).toEqual(expectedCount);
        done();
      })
    });

  });


});
