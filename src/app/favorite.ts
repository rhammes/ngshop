import { Dog } from './dog';

export class Favorite {
    username: string;
    dogs: Dog[] = [];

    addDog(dog: Dog) {
        this.dogs.push(dog);
    }
}
