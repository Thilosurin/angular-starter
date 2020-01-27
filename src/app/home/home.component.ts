import { Component, OnInit } from "@angular/core";
import Axios from 'axios';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  movies = [];

  constructor() {}

  ngOnInit() {
    this.fetchData();
  }

  async fetchData() {
    const response = await Axios.get("http://localhost:3000/movie");
    this.movies = response.data.filter(p => p.Poster !== "N/A");
  }
}
