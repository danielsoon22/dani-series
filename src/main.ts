import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { SeriesListComponent } from './app/components/series-list/series-list.component';
import { SeriesDetailComponent } from './app/components/series-detail/series-detail.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: SeriesListComponent },
      { path: 'series/:id', component: SeriesDetailComponent }
    ])
  ]
});
