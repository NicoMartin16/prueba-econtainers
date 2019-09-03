import { Component, OnInit } from '@angular/core';
import { StarService } from '../../services/star.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public films: any = [];
  constructor(public _starService: StarService) {
   
   }

  ngOnInit() {
    this._starService.getFilms().subscribe(data => {
      this.films = data;
    });
  }

 

}
