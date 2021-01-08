import { Movie } from './../../models/movie';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Output() selectMovie = new EventEmitter();


  faTrash = faTrash;
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void { }

  movieSelected = (movie: any) => {
    this.selectMovie.emit(movie);
  }
}
