import { Favorite } from './favorite';
import { Dog } from './dog';

describe('Favorite', () => {
  it('should create an instance', () => {
    expect(new Favorite()).toBeTruthy();
  });
  describe('addDog()', () => {
    it('should add to dogs array', () => {
      const expectedDogCount: number = 1;
      const favorite: Favorite = new Favorite();
      const dog: Dog = new Dog();

      favorite.addDog(dog);

      expect(favorite.dogs.length).toEqual(expectedDogCount);
    });
  });


});
