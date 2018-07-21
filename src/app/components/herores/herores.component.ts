import { Component , OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/herores.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-herores',
  templateUrl: './herores.component.html',
})
export class HeroresComponent implements OnInit  {
    herores:Heroe[] = []; 
    constructor( private _herueService : HeroesService, private router: Router) { }

    ngOnInit(){
      this.herores = this._herueService.getHeroes();
    }

    verHeroe( id:number ){
      this.router.navigate( ['/heroe', id] );
    }
  // constructor( private activatedRote: ActivatedRoute ) { 
  //   this.activatedRote.params.subscribe( params => {
  //     console.log(params['id']);
  //   })
  // }
}
