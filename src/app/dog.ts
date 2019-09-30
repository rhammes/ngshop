export class Dog {
    id: string;
    name: string;
    thumbnail: string;
    likeCount: number;

    constructor(data?: object) {
        if (data) {
            this.id = data['id'];
            this.name = data['name'];
            this.thumbnail = data['thumbnail'];
            this.likeCount = 0;
        }
    }

    incrementLikeCount() {
        this.likeCount++;
    }
}
