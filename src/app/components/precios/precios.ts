import { Component, inject, signal } from '@angular/core';
import { Api, Producto } from '../../services/api';

interface Grupo {
  categoria: string;
  items: Producto[];
}

@Component({
  selector: 'app-precios',
  templateUrl: './precios.html',
  styleUrl: './precios.css',
})
export class Precios {
  private api = inject(Api);
  grupos = signal<Grupo[]>([]);

  constructor() {
    this.api.getProductos().subscribe((productos) => {
      const mapa = new Map<string, Producto[]>();
      for (const p of productos) {
        const cat = p.categoria || 'Otros';
        mapa.set(cat, [...(mapa.get(cat) ?? []), p]);
      }
      this.grupos.set([...mapa].map(([categoria, items]) => ({ categoria, items })));
    });
  }
}