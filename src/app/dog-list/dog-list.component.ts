import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';
import { Dog } from '../dog'; // OPTIONAL: Observables value-add.


@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  dogs: Dog[];
  constructor(private dogService: DogsService) { }

  ngOnInit() {
    this.getUpdates();
  }

  getUpdates() {
    return this.dogService.all().subscribe(data => this.dogs = data);
  }

  /**
   * Event handler for fetching a dog by ID.
   * @param el
   */
  getDogById(el) {
    return this.dogService.get(el.target.id);
  }

}
