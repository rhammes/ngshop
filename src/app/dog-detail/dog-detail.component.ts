import { Component, OnInit, Input } from '@angular/core';
import { Dog } from "../dog";
import {DogsService} from "../services/dogs.service";

@Component({
  selector: 'dog',
  templateUrl: './dog-detail.component.html',
  styleUrls: ['./dog-detail.component.css']
})
export class DogDetailComponent implements OnInit {
  @Input() dog: Dog;
  @Input() id: any;
  likes: number;

  constructor(private dogService: DogsService) {}

  ngOnInit() {
    this.likes = this.dogService.getLikes(this.dog.id) || 0;
  }

  addLike() {
    this.likes += 1;
    this.dogService.update({ id: this.dog.id, likes: this.likes });
  }

}
