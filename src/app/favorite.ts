import { Dog } from './dog';

export class Favorite {
    username: string;
    dogs: Dog[] = [];

    addDog(dog: Dog) {
        if (!this.dogs.find(fDog => fDog.id == dog.id)) {
            this.dogs.push(dog);
        }
    }
}
