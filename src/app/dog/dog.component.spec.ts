import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogComponent } from './dog.component';
import { Dog } from '../dog';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';

describe('DogComponent', () => {
  let component: DogComponent;
  let fixture: ComponentFixture<DogComponent>;
  let compiled: any
  let dog: Dog

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogComponent);
    component = fixture.componentInstance;

    dog = new Dog();
    dog.name = 'Fred';
    component.dog = dog;

    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should display name', () => {
    expect(compiled.querySelector('.dogname').textContent).toContain(dog.name);
  });

});
