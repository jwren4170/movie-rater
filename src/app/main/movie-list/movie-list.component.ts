import { MovieService } from './../../services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: any = [];

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
}
