import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // Define como standalone
  imports: [RouterModule], // Importa el módulo de enrutamiento
  template: `
    <header></header>
    <router-outlet></router-outlet>
    <footer></footer>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Mi Proyecto Angular'; // Agregar esta línea
}
