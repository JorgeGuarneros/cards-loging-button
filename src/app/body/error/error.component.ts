import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  bandera:boolean=true;
  bandera2:boolean=false
  constructor() { }

  ngOnInit(): void {
  }
  
}
