import { Component } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Inicio } from './components/inicio/inicio';
import { Servicios } from './components/servicios/servicios';
import { Especialidades } from './components/especialidades/especialidades';
import { Nosotros } from './components/nosotros/nosotros';
import { Precios } from './components/precios/precios';
import { Contacto } from './components/contacto/contacto';
import { Chatbot } from './components/chatbot/chatbot';

@Component({
  selector: 'app-root',
  imports: [Navbar, Inicio, Servicios, Especialidades, Nosotros, Precios, Contacto, Chatbot],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}