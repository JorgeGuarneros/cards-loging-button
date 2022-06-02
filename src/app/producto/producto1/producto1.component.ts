import { Component, OnInit } from '@angular/core';
import {CatalogoService} from "../../catalogo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-producto1',
  templateUrl: './producto1.component.html',
  styleUrls: ['./producto1.component.css']
})
export class Producto1Component implements OnInit {

  id: any;
  listaproducto: any;
  constructor(private Catalogoservice: CatalogoService, private parametro: ActivatedRoute) {
    this.id = this.parametro.snapshot.paramMap.get('id');
    this.listaproducto = this.Catalogoservice.getProductosID(this.id);
  }

  ngOnInit(): void {
  }

}
