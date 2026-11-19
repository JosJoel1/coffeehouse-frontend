import { Component, inject, signal } from '@angular/core';
import { Api, Servicio } from '../../services/api';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.html',
})
export class Servicios {
  private api = inject(Api);
  lista = signal<Servicio[]>([]);

  constructor() {
    this.api.getServicios().subscribe((d) => this.lista.set(d));
  }
}