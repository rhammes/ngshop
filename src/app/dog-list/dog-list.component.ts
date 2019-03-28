import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  dogs = this.dogService.all();
  constructor(private dogService: DogsService) { }

  ngOnInit() {
  }

  /**
   * Event handler for fetching a dog by ID.
   * @param el
   */
  getDogById(el) {
    return this.dogService.get(el.target.id);
  }

}
