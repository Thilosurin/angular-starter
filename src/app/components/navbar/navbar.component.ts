import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  aml: number = 0

  constructor(private _movieService: MovieService) { }

  ngOnInit() {

  }

}
