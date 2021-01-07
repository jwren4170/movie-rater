import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: any = [];
  selectedMovie = null;

  constructor(private movieSvc: MovieService) { }

  ngOnInit(): void {
    this.movieSvc.getMovies().subscribe(
      data => {
        this.movies = data;
      },
      error => {
        console.log(error);
      });
  }

  selectMovie = (movie: any) => {
    this.selectedMovie = movie;
  }

}
