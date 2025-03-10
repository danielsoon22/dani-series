import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', // ✅ Selector del componente principal
  imports: [RouterOutlet], // ✅ Importa RouterOutlet para manejar las rutas
  templateUrl: './app.component.html', // ✅ Plantilla HTML del componente
  styleUrl: './app.component.scss' // ✅ Estilos específicos del componente
})
export class AppComponent {
  /**
   * ✅ Título de la aplicación que se muestra en la interfaz
   */
  title = 'TMDBSERIES';
}
