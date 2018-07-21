import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from './../../servicios/herores.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe:any = {};

  constructor( 
      private activatedRote: ActivatedRoute, 
      private _heroreService: HeroesService) 
  { 
    this.activatedRote.params.subscribe( params => {
      this.heroe = this._heroreService.getHeroe(params['id']);
      console.log(this.heroe);
    })
  }
}
