import { Movie } from './../../models/movie';
import { MovieService } from './../../services/movie.service';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() movie: Movie;
  @Output() updateMovie = new EventEmitter<Movie>();

  faStar = faStar;
  rateHovered = 0;

  constructor(private movieSvc: MovieService) { }

  ngOnInit(): void {

  }

  rateHover = (rate: number) => {
    this.rateHovered = rate;
  }

  rateClicked = (rate: number) => {
    this.movieSvc.rateMovie(rate, this.movie.id).subscribe(
      data => this.getDetails(),
      error => console.log(error)
    );
  }


  getDetails = () => {
    this.movieSvc.getMovie(this.movie.id).subscribe(
      (movie: Movie) => this.updateMovie.emit(movie),
      error => console.log(error)
    );
  }

}
