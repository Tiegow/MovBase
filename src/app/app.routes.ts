import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { MoviePage } from './pages/movieP/movieP.component';
import { SearchPage } from './pages/search/search.component';

export const routes: Routes = [
    {path: '', component: HomePage},            //Home
    {path: 'movie/:id', component: MoviePage},  //Página do filme com o parametro 'id'
    {path: 'search', component: SearchPage}     //Página de busca   
];
