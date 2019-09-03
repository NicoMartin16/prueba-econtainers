import { Component, OnInit } from '@angular/core';
import { StarService } from '../../services/star.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  personajes: any = [];
  constructor(private _starService:StarService) { }

  ngOnInit() {
    this._starService.getPersonajes().subscribe(data => {
      this.personajes = data;
    });
  }

}
