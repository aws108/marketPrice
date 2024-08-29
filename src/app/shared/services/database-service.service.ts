import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseServiceService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

   // Obtener todos los supermercados
   getSupermarkets(): Observable<any> {
    return this.http.get(`${this.baseUrl}/supermarkets`);
  }

  // Obtener todas las localizaciones
  getLocations(): Observable<any> {
    return this.http.get(`${this.baseUrl}/locations`);
  }

  // Obtener todos los productos
  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  // Obtener todas las secciones
  getSections(): Observable<any> {
    return this.http.get(`${this.baseUrl}/sections`);
  }

  // Obtener todos los usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }
}
