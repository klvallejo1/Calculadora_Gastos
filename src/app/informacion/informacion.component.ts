import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  deducibles = ['Vivienda', 'Salud', 'Educacion'];

  informacion(deducible: string) {
    alert('Esta es información adicional sobre ' + deducible);
  }

  borrarDeducible(deducible: string) {
    for (let i = 0; i < this.deducibles.length; i++) {
      if (deducible == this.deducibles[i]) {
        this.deducibles.splice(i, 1);
      }
    }
  }
}