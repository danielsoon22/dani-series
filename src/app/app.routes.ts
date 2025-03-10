import { Routes } from '@angular/router';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { SeriesDetailComponent } from './components/series-detail/series-detail.component';

export const routes: Routes = [
  { path: '', component: SeriesListComponent },
  { path: 'serie/:id', component: SeriesDetailComponent } 
];
