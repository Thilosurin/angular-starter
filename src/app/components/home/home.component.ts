import { Component, OnInit } from "@angular/core";
import { MovieService } from '../../services/movie.service';
import Axios from 'axios';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  movies = [];
  isLoading: boolean

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    // this.fetchData();
    this.isLoading = true
    this._movieService.getMoviesUrl().subscribe(m => {
      this.movies = m
      this.isLoading = false
    })
  }

  async fetchData() {
    const response = await Axios.get("http://localhost:3000/movie");
    this.movies = response.data.filter(p => p.Poster !== "N/A");
  }

  onSearch(search: string) {
    if (search != '') {
      this.movies = this.movies.filter(m => m.Title.toLowerCase().includes(search))

    } else {
      this.ngOnInit();
    }
  }
}
