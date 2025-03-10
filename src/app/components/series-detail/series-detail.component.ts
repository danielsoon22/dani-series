import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-series-detail', // ✅ Selector del componente de detalles de serie
  templateUrl: './series-detail.component.html', // ✅ Plantilla HTML asociada al componente
  styleUrls: ['./series-detail.component.scss'], // ✅ Archivo de estilos específico del componente
  standalone: true,
  imports: [CommonModule] // ✅ Importa CommonModule para utilizar características básicas de Angular
})
export class SeriesDetailComponent {
  /**
   * ✅ Objeto que almacenará los detalles de la serie obtenidos de la API.
   */
  serie: any;
  
  /**
   * ✅ Clave de la API para realizar las peticiones a TMDB.
   */
  apiKey = 'c6aeee577586ba38e487b74dfede5deb'; 

  constructor(private route: ActivatedRoute, private http: HttpClient, private location: Location) {}

  /**
   * ✅ Método que se ejecuta al cargar el componente.
   * Obtiene el ID de la serie desde la URL y llama al método para obtener los detalles.
   */
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // ✅ Obtiene el ID de la serie desde la URL
    if (id) {
      this.getSerieDetail(id); // ✅ Llama al método para obtener detalles de la serie
    }
  }

  /**
   * ✅ Método para obtener los detalles de una serie desde la API de TMDB.
   * @param id - ID de la serie que se desea obtener.
   */
  getSerieDetail(id: string) {
    this.http.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}&language=en-US`)
      .subscribe((data: any) => {
        console.log(data); // ✅ Muestra en consola los datos obtenidos para depuración
        this.serie = data; // ✅ Almacena los datos en la variable 'serie'
      }, error => {
        console.error('Error cargando los detalles de la serie:', error); // ✅ Manejo de errores
      });
  }

  /**
   * ✅ Método para regresar a la página anterior en la navegación del usuario.
   */
  goBack() {
    this.location.back();  
  }
}