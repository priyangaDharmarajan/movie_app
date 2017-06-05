import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JsonpModule} from'@angular/http';

import { AppComponent } from './app.component';
import{ InfiniteScrollModule} from'ngx-infinite-scroll';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import {MovieserviceService } from './movieservice.service';
import {GenereService } from './genere.service';
import { FavouritesComponent } from './favourites/favourites.component';
import {AppRouting} from './app.route.module';
import {FavouriteService} from './favourite.service'



@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    FavouritesComponent
  ],


  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  InfiniteScrollModule,
    JsonpModule,
    AppRouting
    
  ],
  providers: [MovieserviceService, GenereService,FavouritesComponent,FavouriteService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }


// import { ExampleService } from './example.service';
//imports:[ BrowserModule,  ],

// @NgModule({
//   //other metadata properties
//   providers: [ExampleService]
// })