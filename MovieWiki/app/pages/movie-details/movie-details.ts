import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the MovieDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/movie-details/movie-details.html',
})
export class MovieDetailsPage {

public title;
public overview;
  constructor(private nav: NavController, private navParam:NavParams) {
    
this.title=this.navParam.get("movie").original_title;
this.overview=this.navParam.get("movie").overview;
  }

}
