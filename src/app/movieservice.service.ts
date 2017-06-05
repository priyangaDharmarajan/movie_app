import { Injectable } from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx'
@Injectable()
export class MovieserviceService {

 title:string = 'The Movie Database!';
page=1;

  constructor(private jsonp: Jsonp) {  }
  
  search(query : string) {
   
      let url = 'https://api.themoviedb.org/3/search/movie?api_key=dc142141b1a80cdd67b81354521e6fae&language=en-US&page='+this.page+'&include_adult=false&query='+query+'&callback=JSONP_CALLBACK';
      return this.jsonp.get(url).map(res => res.json());
    
  }
}

