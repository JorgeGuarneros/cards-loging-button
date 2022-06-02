import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  listaproductos: any [] = [
    {
      id: 1,
      nombre: 'Rex',
      descripcion: 'Carnivoro',
      imagen: 'assets/rex.jpg'
    },
    {
      id: 2,
      nombre: 'Braqui',
      descripcion: 'Hervivoro',
      imagen: 'assets/braqui.jpg'
    },
    {
      id: 3,
      nombre: 'Quetzal',
      descripcion: 'Obnivoro',
      imagen: 'assets/quetza.jpg'
    }
  ];
  constructor() { }

  getProductos(){
    return this.listaproductos;
  }

  getProductosID(id: number){
    return this.listaproductos[id-1];
  }
}
