import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { SeriesService } from '../../services/series.service';

@Component({
  selector: 'app-series-list', 
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule], 
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {
  /**
   * ✅ Lista de series obtenidas de la API
   */
  series: any[] = [];
  
  /**
   * ✅ Variables de paginación
   */
  currentPage: number = 1;
  totalPages: number = 1;
  
  /**
   * ✅ Variables para la búsqueda
   */
  searchQuery: string = '';
  isSearching: boolean = false;

  constructor(private seriesService: SeriesService) {}

  /**
   * ✅ Método que se ejecuta al iniciar el componente.
   * Carga la lista de series populares en la primera página.
   */
  ngOnInit(): void {
    this.loadPopularSeries();
  }

  /**
   * ✅ Obtiene la lista de series populares de la API.
   */
  loadPopularSeries(): void {
    this.seriesService.getPopularSeries(this.currentPage).subscribe({
      next: (data) => {
        this.series = data.results || [];
        this.totalPages = data.total_pages || 1;
      },
      error: (error) => {
        console.error('Error cargando series populares:', error);
      }
    });
  }

  /**
   * ✅ Maneja la búsqueda de series.
   * Si el usuario introduce un término de búsqueda, realiza la consulta a la API.
   * Si el campo está vacío, vuelve a cargar las series populares.
   */
  searchSeries(): void {
    if (this.searchQuery.trim() !== '') {
      this.isSearching = true;
      this.currentPage = 1;
      this.loadSearchResults();
    } else {
      this.isSearching = false;
      this.loadPopularSeries();
    }
  }

  /**
   * ✅ Carga los resultados de búsqueda según el término introducido.
   */
  loadSearchResults(): void {
    this.seriesService.searchSeries(this.searchQuery, this.currentPage).subscribe({
      next: (data) => {
        this.series = data.results || [];
        this.totalPages = data.total_pages || 1;
      },
      error: (error) => {
        console.error('Error buscando series:', error);
      }
    });
  }

  /**
   * ✅ Método para avanzar a la siguiente página.
   * Si se está realizando una búsqueda, carga los resultados correspondientes.
   */
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.isSearching ? this.loadSearchResults() : this.loadPopularSeries();
    }
  }

  /**
   * ✅ Método para retroceder a la página anterior.
   * Si se está realizando una búsqueda, carga los resultados correspondientes.
   */
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.isSearching ? this.loadSearchResults() : this.loadPopularSeries();
    }
  }
}