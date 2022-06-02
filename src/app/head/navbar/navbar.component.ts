import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  bandera:boolean=false;
  bandera2:boolean=false;
  constructor() {

  }
  ngOnInit(): void {
    
  }
  muestra(){
    this.bandera=true;
  }
  busqueda(){
    if(!this.bandera2){
      this.bandera2 =true;
    }else{
      this.bandera2= false;
    }  

  }
  }
