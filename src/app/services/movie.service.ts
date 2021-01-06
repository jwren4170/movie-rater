import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'http://localhost:8000/api/movies/';

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Token a3bab5217b5ca59adb1b092f27a2a9005d9bbcb6'
  });

  constructor(
    private httpClient: HttpClient
  ) { }

  getMovies = () => {
    return this.httpClient.get(this.baseUrl, { headers: this.headers });
  }
}
