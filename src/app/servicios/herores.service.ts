import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
    private heroes:Heroe [] = [
        {
            nombre: "Iron Man",
            bio: "dwdawdawdawd",
            img: "assets/heroeIronman.jpg",
            aparicion: "1974-11-01",
            casa: "Marvel"
        },
        {
            nombre: "Hulk",
            bio: "dawdawd ",
            img: "assets/heroreHulk.jpg",
            aparicion: "1974-11-01",
            casa: "Marvel"
        },
        {
            nombre: "Wolverin",
            bio: "dawdawawdawdawdd ",
            img: "assets/heroreWolverin.jpg",
            aparicion: "1974-11-01",
            casa: "Marvel"
        }
    ];
    constructor(){
        console.log("Servicio listo para usar!!!!");
    }

    getHeroes() : Heroe[]{
        return this.heroes;
    }

    getHeroe(id:string) {
        return this.heroes[id];
    }

    buscarHeroes(termino:string) : Heroe[]{
        let heroesArr:Heroe[] = [];
        termino = termino.toLowerCase();
        var heroes = this.heroes;

        heroes.forEach(element => {
            let nombre = element.nombre.toLowerCase();
            if(nombre.indexOf( termino ) >= 0 ){
                heroesArr.push(element);
            }
        });

        return heroesArr;
    }
}

export interface Heroe {
    nombre:string,
    bio:string,
    img: string,
    aparicion:string,
    casa: string
}