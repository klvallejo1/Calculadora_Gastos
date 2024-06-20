import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario2',
  templateUrl: './formulario2.component.html',
  styleUrl: './formulario2.component.css',
})
export class Formulario2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ruc: string = '99999999001';
  valor: number = 0.0;
  gasto: string = 'Ninguno';
}
