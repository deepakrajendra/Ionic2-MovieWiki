import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MovieService} from '../../providers/movie-service/movie-service';
import {MovieDetailsPage} from '../../pages/movie-details/movie-details';
@Component({
  templateUrl: 'build/pages/home/home.html',
  providers:[MovieService]
})
export class HomePage {
  public movies=[];
  constructor(private nav: NavController, private movieService:MovieService) {

  }
  
  searchMovie(event,key)
  {
    if(event.target.value.length>2)
    {
      this.movieService.searchMovie(event.target.value).
      subscribe(data=>
      this.movies=data.results,
      err=>{console.log(err)},
      ()=>{console.log("search completed")});
      
    }
    
  }
  
  itemClick(event,movie)
  {
    this.nav.push(MovieDetailsPage,{movie:movie});
    
  }
}
