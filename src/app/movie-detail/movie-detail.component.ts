import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import Axios from 'axios'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.showMovie()
  }
  async showMovie () {
    const id = this.route.snapshot.paramMap.get('id');
    const response = await Axios.get("http://www.omdbapi.com/", {
      params: {
        apiKey: "5160c2ad",
        i: id
      }
    });
    this.movie = response.data
    console.log(this.movie)
  }
}
