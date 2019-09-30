import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListComponent } from './dog-list.component';
import { DogComponent } from '../dog/dog.component';

describe('DogListComponent', () => {
  let component: DogListComponent;
  let fixture: ComponentFixture<DogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DogListComponent, DogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getAll()', () => {
    it('should return all puppies', () => {
      const expectedCount = 100;
      const actualCount = component.getAll().length;
      expect(actualCount).toEqual(expectedCount);
    })
  })
});
