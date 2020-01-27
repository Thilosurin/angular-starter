import { Injectable } from '@angular/core';
import { Movie } from './movie';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): Observable<Movie> {
    return of();
  }

  getMovie(id: number): Observable<Movie> {
    return of([].find(m => m.imdbId === id));
  }
}
