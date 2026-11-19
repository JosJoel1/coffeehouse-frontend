import { Component, inject, signal } from '@angular/core';
import { Api, Especialidad } from '../../services/api';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.html',
})
export class Especialidades {
  private api = inject(Api);
  lista = signal<Especialidad[]>([]);

  constructor() {
    this.api.getEspecialidades().subscribe((d) => this.lista.set(d));
  }
}