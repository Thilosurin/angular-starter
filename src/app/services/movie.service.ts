import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of } from 'rxjs'
import { Movie } from '../movie';


const httpOptions = {
  header: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movie[]
  moviesJson: string = "http://localhost:3000/movie"
  movieWeb: string = "http://www.omdbapi.com"

  constructor(private http: HttpClient) {

  }

  getMoviesUrl(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesJson)
  }

  getMovieUrl(id: string): Observable<Movie> {
    const url = `${this.movieWeb}/?apiKey=5160c2ad&i=${id}`
    return this.http.get<Movie>(url)
  }

  getMovies(): Observable<Movie> {
    return of();
  }

  getMovie(id: number): Observable<Movie> {
    return of([].find(m => m.imdbId === id));
  }
}
