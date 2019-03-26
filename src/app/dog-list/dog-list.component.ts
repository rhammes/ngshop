import { Component, OnInit } from '@angular/core';
import { DogsService } from '../services/dogs.service';

@Component({
  selector: 'dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {
  dogs = this.getAll();
  constructor(private dogService: DogsService) { }

  ngOnInit() {
  }

  getAll() {
    return this.dogService.all();
  }

}
