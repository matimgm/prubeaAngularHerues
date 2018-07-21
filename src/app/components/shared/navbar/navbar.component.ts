import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../servicios/herores.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private _heroesService : HeroesService) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    console.log(termino);
    var heroesEncontrados = this._heroesService.buscarHeroes(termino);
    console.log(heroesEncontrados);
  }
}
