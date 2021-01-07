import { Component, Input, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  faStar = faStar;
  rateHovered = 0;

  @Input() movie: any;

  constructor() { }

  ngOnInit(): void {

  }

  rateHover = (rate: any) => {
    this.rateHovered = rate;
  }

  rateClicked = (rate: any) => {
    this.rateHovered = rate;
  }

}
