import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {CatalogoService} from "../../catalogo.service";

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {

  listaproducto: any [] = [];
  constructor(private router: Router, private Catalogoservice: CatalogoService, private ruta: Router) {
    this.listaproducto = this.Catalogoservice.getProductos();
  }

  detalleProducto(id: number){
    this.ruta.navigate(['producto/producto/', id]);
  }

  ngOnInit(): void {
  }

}
