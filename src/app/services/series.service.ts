import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiKey = 'c6aeee577586ba38e487b74dfede5deb';
  private apiUrl = 'https://api.themoviedb.org/3/tv/popular';
  private searchUrl = 'https://api.themoviedb.org/3/search/tv';

  constructor(private http: HttpClient) { }

  /**
   * Obtiene una lista de series populares desde TMDB.
   * @param page Número de página a solicitar.
   * @returns Observable con la lista de series populares.
   */
  getPopularSeries(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?api_key=${this.apiKey}&language=en-US&page=${page}`);
  }

  /**
   * Busca series en TMDB en función de un término de búsqueda.
   * @param query Término de búsqueda.
   * @param page Número de página a solicitar (por defecto 1).
   * @returns Observable con los resultados de la búsqueda.
   */
  searchSeries(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.searchUrl}?api_key=${this.apiKey}&language=en-US&query=${query}&page=${page}`);
  }
}
