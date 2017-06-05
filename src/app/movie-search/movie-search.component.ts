import { Component, OnInit } from '@angular/core';
import {MovieserviceService } from '../movieservice.service';
import {GenereService } from '../genere.service';
import{FavouriteService}from '../favourite.service';
import{Http,Response,RequestOptions,Headers} from '@angular/http';
import {Jsonp} from '@angular/http';
import {FavouritesComponent} from '../favourites/favourites.component';
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
   providers: [MovieserviceService,FavouriteService]
})
export class MovieSearchComponent implements OnInit {

 title: string;
    
searchString: string;
  searchResults: Array<Object>;
  genereResults=[];
   moviename:string;GenereServiceGenereService
  MovieArray=[];
  scrolldistance=50000;
  throttle=20;
  page=1;
  totalpage:number;
  getResults=[];

    constructor(private _movieService: MovieserviceService,private genereservice : GenereService,private favcomp:FavouritesComponent) {

    }
    search(){
       
    this._movieService.search(this.searchString).subscribe(res => {this.searchResults = res.results;this.totalpage=res.total_pages})
 
    this.genereservice.getGenere().subscribe(res => {this.genereResults = res.genres;})


 }

   


    genremethod(value)
    {
        let array=[];
        this.genereResults.forEach(function(a){
           if(value.includes(a.id)){
                array.push(a.name);
           }
        });
        return array;
    }
    onScroll (value) {
if(this._movieService.page<=this.totalpage){
    this._movieService.page++;
      console.log('scrolled!!');
       this._movieService.search(value)
      .subscribe(
          // data=>{this.getData.push(data.results),console.log(this.getData)},
          data=> {data.results.forEach((elem) => {
            this.searchResults.push(elem);
          })})
}

    }
 
    
     ngOnInit() {
        
    }
}
