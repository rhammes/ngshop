export class Dog {
    id: string;
    name: string;
    thumbnail: string;
    likeCount: number;

    incrementLikeCount() {
        this.likeCount++;
    }
}
