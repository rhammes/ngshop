import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesComponent } from './favorites.component';
import { Dog } from '../dog';

describe('FavoritesComponent', () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let compiled;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
    compiled = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of dog names', () => {
    const dog1: Dog = new Dog();
    const dog2: Dog = new Dog();
    dog1.id = "dog1";
    dog1.name = "Name Dog1";
    dog2.id = "dog2";
    dog2.name = "Name Dog2";
    component.favorite.toggleDog(dog1);
    component.favorite.toggleDog(dog2);
    fixture.detectChanges();

    const favorites = compiled.querySelector('.favorites-component')
    expect(favorites.textContent).toContain(dog1.name);
    expect(favorites.textContent).toContain(dog2.name);

  })
});
