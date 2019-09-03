import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class StarService {
  public url: string;
  constructor(private http: HttpClient) { 
    console.log("Hola desde el servicio");
     this.url = `https://swapi.co/`;
  }

  getFilms(): Observable<any> {
    return this.http.get(`${this.url}api/films/`).pipe(map(this.crearArreglo));
  }

  getPersonajes() :Observable<any> {
    return this.http.get(`${this.url}api/people/`).pipe(map(this.crearArreglo));
  }

  private crearArreglo(filmsObj: object) {
    let pelicula: any = [];
    Object.keys(filmsObj).forEach((item) => {
      if (item == 'results') {
         pelicula = filmsObj[item];
      }
    });
    return pelicula;
  }
}
