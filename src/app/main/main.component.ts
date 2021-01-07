import { Movie } from './../models/movie';
import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: Movie[] = [];
  selectedMovie: Movie = null;

  constructor(private movieSvc: MovieService) { }

  ngOnInit(): void {
    this.movieSvc.getMovies().subscribe(
      (data: Movie[]) => {
        this.movies = data;
      },
      (error: any) => {
        console.log(error);
      });
  }

  selectMovie = (movie: Movie) => {
    this.selectedMovie = movie;
  }

}
