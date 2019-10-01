import { Dog } from './dog';

export class Favorite {
    username: string;
    dogs: Dog[] = [];

    toggleDog(dog: Dog) {
        if (!this.dogs.find(fDog => fDog.id === dog.id)) {
            this.dogs.push(dog);
        } else {
            this.dogs = this.dogs.filter(fDog => fDog.id !== dog.id)
        }
    }
}
