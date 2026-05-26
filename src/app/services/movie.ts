import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private http = inject(HttpClient);

  private apiUrl = environment.apiUrl;

  getPopularMovies() {
    return this.http.get(`${this.apiUrl}/movie/popular`);
  }
}
