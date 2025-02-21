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
    dog.thumbnail = 'this-is-our-src'
    dog.likeCount = 0;
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

  it ('should have an img with correct src', () => {
    expect(compiled.querySelector('img').src).toContain(dog.thumbnail);
  })

  it ('should have a favorite button', () => {
    expect(compiled.querySelector('button').textContent).toContain('Favorite');
  })

  it ('should have a like button that increments a count', () => {
    let expectedCount = dog.likeCount;
    let button = compiled.querySelector('button.like');
    expect(button.textContent).toContain('Like ' + expectedCount);

    button.click();
    fixture.detectChanges();

    ++expectedCount;
    expect(button.textContent).toContain('Like ' + expectedCount);
  })

});
