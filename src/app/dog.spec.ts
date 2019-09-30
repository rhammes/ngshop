import { Dog } from './dog';

describe('Dog', () => {
  let dog: Dog;
  beforeEach(() => {
    dog = new Dog();
  })

  it('should create an instance', () => {
    expect(dog).toBeTruthy();
  });

  describe('incrementLikeCount', () => {
    it('should increment like count', () => {
      dog.likeCount = 0;
      dog.incrementLikeCount();
      expect(dog.likeCount).toEqual(1);
     
    })
  })
});
