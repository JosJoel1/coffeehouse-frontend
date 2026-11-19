import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Inicio {
  id: number;
  titulo: string;
  subtitulo: string | null;
  video: string | null;
}

export interface Servicio {
  id: number;
  nombre: string;
  descripcion: string | null;
  icono: string | null;
  imagen: string | null;
}

export interface Especialidad {
  id: number;
  nombre: string;
  descripcion: string | null;
  imagen: string | null;
}

export interface Producto {
  id: number;
  titulo: string | null;
  descripcion: string | null;
  imagen: string | null;
  precio: string;
  categoria: string | null;
}

export interface Nosotros {
  id: number;
  historia: string | null;
  direccion: string | null;
  telefono: string | null;
  email: string | null;
  horario: string | null;
  foto: string | null;
}

export interface Contacto {
  nombre: string;
  email: string;
  mensaje: string;
}

@Injectable({ providedIn: 'root' })
export class Api {
  private http = inject(HttpClient);
  private base = 'http://127.0.0.1:3000/api';

  getInicio(): Observable<Inicio> {
    return this.http.get<Inicio>(`${this.base}/inicio`);
  }
  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(`${this.base}/servicios`);
  }
  getEspecialidades(): Observable<Especialidad[]> {
    return this.http.get<Especialidad[]>(`${this.base}/especialidades`);
  }
  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${this.base}/productos`);
  }
  getNosotros(): Observable<Nosotros> {
    return this.http.get<Nosotros>(`${this.base}/nosotros`);
  }
  enviarContacto(datos: Contacto): Observable<unknown> {
    return this.http.post(`${this.base}/contactos`, datos);
  }
  preguntarChatbot(prompt: string): Observable<{ response: string }> {
    return this.http.post<{ response: string }>(`${this.base}/chatbot`, { prompt });
  }
}