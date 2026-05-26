import { Component, inject, signal } from '@angular/core';
import { MoviesService } from '../services/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieList {

  moviesService = inject(MoviesService);

  movies = signal<any[]>([]);

  ngOnInit() {

    this.moviesService.getPopularMovies()
      .subscribe((response: any) => {

        console.log(response);

        this.movies.set(response.results);

      });

  }

}