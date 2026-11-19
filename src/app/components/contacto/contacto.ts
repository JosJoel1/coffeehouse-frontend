import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../../services/api';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  private api = inject(Api);
  nombre = '';
  email = '';
  mensaje = '';
  estado = signal<'' | 'enviando' | 'ok' | 'error'>('');

  enviar() {
    this.estado.set('enviando');
    this.api
      .enviarContacto({ nombre: this.nombre, email: this.email, mensaje: this.mensaje })
      .subscribe({
        next: () => {
          this.estado.set('ok');
          this.nombre = this.email = this.mensaje = '';
        },
        error: () => this.estado.set('error'),
      });
  }
}