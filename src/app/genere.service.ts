import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx'
@Injectable()
export class GenereService {



  constructor(private http: Http) {  }
  
  getGenere() {
   
      let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=dc142141b1a80cdd67b81354521e6fae&language=en-US';
      return this.http.get(url).map(res => res.json());
    
  }
}