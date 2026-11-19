import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Api } from '../../services/api';

interface Mensaje {
  de: 'yo' | 'bot';
  texto: string;
}

@Component({
  selector: 'app-chatbot',
  imports: [FormsModule],
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot {
  private api = inject(Api);
  abierto = signal(false);
  cargando = signal(false);
  mensajes = signal<Mensaje[]>([
    { de: 'bot', texto: '¡Hola! Soy el asistente de CoffeeHouse. Pregúntame por el menú, precios u horarios.' },
  ]);
  pregunta = '';

  enviar() {
    const texto = this.pregunta.trim();
    if (!texto || this.cargando()) return;
    this.mensajes.update((m) => [...m, { de: 'yo', texto }]);
    this.pregunta = '';
    this.cargando.set(true);
    this.api.preguntarChatbot(texto).subscribe({
      next: (r) => {
        this.mensajes.update((m) => [...m, { de: 'bot', texto: r.response }]);
        this.cargando.set(false);
      },
      error: () => {
        this.mensajes.update((m) => [
          ...m,
          { de: 'bot', texto: 'Lo siento, no puedo responder en este momento.' },
        ]);
        this.cargando.set(false);
      },
    });
  }
}