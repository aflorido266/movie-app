import { Injectable } from '@angular/core';
import { Movie } from '../movie.interface'; 

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
movies =[
{
      id: '1',
      title: 'Interstellar',
      director: 'Christopher Nolan',
      genre: 'Science Fiction'
    },
    {
      id: '2',
      title: 'The Godfather',
      director: 'Francis Ford Coppola',
      genre: 'Crime'
    },
    {
      id: '3',
      title: 'Spirited Away',
      director: 'Hayao Miyazaki',
      genre: 'Fantasy'
    }

]

}
