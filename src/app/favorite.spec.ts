import { Favorite } from './favorite';
import { Dog } from './dog';

describe('Favorite', () => {
  it('should create an instance', () => {
    expect(new Favorite()).toBeTruthy();
  });

  describe('toggleDog()', () => {
    it('should add to dogs array', () => {
      const expectedDogCount: number = 1;
      const favorite: Favorite = new Favorite();
      const dog: Dog = new Dog();

      favorite.toggleDog(dog);

      expect(favorite.dogs.length).toEqual(expectedDogCount);
    });

    it('should toggle adding and removing dogs', () => {
      let expectedDogCount: number = 1;
      const favorite: Favorite = new Favorite();
      const dog1: Dog = new Dog();
      const dog2: Dog = new Dog();
      dog1.id = "dog1";
      dog2.id = "dog2";

      favorite.toggleDog(dog1);
      expect(favorite.dogs.length).toEqual(expectedDogCount);

      expectedDogCount = 0
      favorite.toggleDog(dog1);
      expect(favorite.dogs.length).toEqual(expectedDogCount);

      expectedDogCount = 2
      favorite.toggleDog(dog1);
      favorite.toggleDog(dog2);
      expect(favorite.dogs.length).toEqual(expectedDogCount);

      expectedDogCount = 1
      favorite.toggleDog(dog2);
      expect(favorite.dogs.length).toEqual(expectedDogCount);
    });
  });
});
