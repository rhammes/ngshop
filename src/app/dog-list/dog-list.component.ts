import { Component, OnInit } from '@angular/core';
import { Dog } from '../dog';
import { DogsService } from '../dogs.service';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  dogs: Dog[] = [];

  constructor(private dogService: DogsService) { }

  ngOnInit() {
    this.getUpdates();
  }

  getUpdates() {
    this.dogService.all().subscribe(data => this.dogs = data);
  }

  getAll(): Dog[] {
    return this.dogs;
  }
}
