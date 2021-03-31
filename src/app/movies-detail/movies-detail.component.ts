import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {

  @Input() movie: Movie

  constructor(
    private movieService: MovieService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id)
        .subscribe(movie=> this.movie = movie);
  }

  save(): void {
    this.movieService.update(this.movie)
      .subscribe(()=> {
        this.location.back();
      });
  }
}
