import { Component, OnInit } from '@angular/core';
import{FavouriteService}from '../favourite.service';
import {GenereService } from '../genere.service';
@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

getResults=[];
genereResults=[];
  constructor(private favouriteservice:FavouriteService,private genereservice : GenereService)  {
    
   this.favouriteservice.getfavourite().subscribe(res => {this.getResults = res})

    this.genereservice.getGenere().subscribe(data => {this.genereResults = data.genres;});
  }

     postfavour(id,posterpath,title,releasedate,average,genreid,overview)
 {
   let obj={id,posterpath,title,releasedate,average,genreid,overview};
  console.log(obj);  
   this.favouriteservice.postfav(obj).subscribe(        
         (data) => console.log('posted!!')     // complete;
    );
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
  deletefav(id){
    console.log(id);
    this.favouriteservice.deletefavourite(id).subscribe(
      data=>{this.getResults=data},
      error=>{},
      ()=>{}

    );
  }
  updateRating(id,posterpath,title,releasedate,average,genreid,overview){
    let obj={id,posterpath,title,releasedate,average,genreid,overview};
    console.log(id);
    this.favouriteservice.updatefavourite(obj).subscribe(
      data=>{this.getResults=data},
      error=>{},
      ()=>{}

    );
  }

  ngOnInit() {
  }

}
