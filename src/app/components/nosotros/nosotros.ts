import { Component, inject, signal } from '@angular/core';
import { Api, Nosotros as NosotrosData } from '../../services/api';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.html',
})
export class Nosotros {
  private api = inject(Api);
  datos = signal<NosotrosData | null>(null);

  constructor() {
    this.api.getNosotros().subscribe((d) => this.datos.set(d));
  }
}