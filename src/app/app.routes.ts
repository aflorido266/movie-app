import { Routes } from '@angular/router';
// src/app/app.routes.ts: ruta raíz: '' al componente "Home",
import { Home } from './home/home';
// ruta 'movies' al componente MovieList
import { MovieList } from './movie-list/movie-list';
// ruta dinámica: 'movies/:movieId' al componente MovieDetails,
import { MovieDetails } from './movie-details/movie-details';
// ruta comodín:'**' al componente NotFound
import { NotFound } from './not-found/not-found';



export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'Home', redirectTo:'',
    component: Home
  },

    {path: 'movies',
    component: MovieList

    },
    {path: 'movies/:movieId',
    component: MovieDetails
    },

    {path: '**',
    component: NotFound
    }

];


