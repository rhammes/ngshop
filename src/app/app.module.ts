import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { DogsService } from './dogs.service';
import { FavoritesComponent } from './favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    DogListComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    DogsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
