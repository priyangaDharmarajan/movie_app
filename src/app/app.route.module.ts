import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { MovieSearchComponent } from './movie-search/movie-search.component'


const APP_ROUTES: Routes = [
//   {path: '', component: AppComponent},
  {path: 'home', component: MovieSearchComponent},
  {path: 'favouriteslist', component: FavouritesComponent},

];


@NgModule({
  imports: [ RouterModule.forRoot(APP_ROUTES) ],
  exports: [ RouterModule ]
})
export class AppRouting {}