// import { Component } from '@angular/core';
// //import { Component } from '@angular/core';
// //import { MovieService } from '../services/movie.services.ts';
// import {Jsonp} from '@angular/http';
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   // providers: [MovieService]
// })

// export class AppComponent {
  
//   title:string = 'The Movie Database!';
//   query: string;
//   movies:any[];

//   constructor(private jsonp: Jsonp) {  }
  
//   search() {
//     if(this.query) {
//       let url = `https://api.themoviedb.org/3/search/movie?api_key=dc142141b1a80cdd67b81354521e6fae&language=en-US&page=1&include_adult=false&query=${encodeURIComponent(this.query)}&callback=JSONP_CALLBACK`;
//       return this.jsonp.get(url).subscribe(data => {this.movies = data.json().results;});
//     }
//   }
// }

import { Component } from '@angular/core';


@Component({
    selector: 'movie-App',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
   
})
export class AppComponent { 

    title: string;
    


    constructor() {

    }
   

    ngOnInit() {
        //  title: string;
         //this.title = this._movieService.search();
    }


    
}


