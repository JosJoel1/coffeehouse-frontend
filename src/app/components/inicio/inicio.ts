import { Component, inject, signal } from '@angular/core';
import { Api, Inicio as InicioData } from '../../services/api';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  private api = inject(Api);
  datos = signal<InicioData | null>(null);
  error = signal(false);

  constructor() {
    this.api.getInicio().subscribe({
      next: (d) => this.datos.set(d),
      error: () => this.error.set(true),
    });
  }

  palabras(titulo: string): string[] {
    return titulo.split(' ');
  }
}