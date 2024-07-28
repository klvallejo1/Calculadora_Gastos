import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface Deducible {
  categoria: string;
  descripcion: string;
  informacionAdicional: string;
  imagen: string;
  alt: string;
}

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css',
})
export class InformacionComponent implements OnInit {
  deducibles: Deducible[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Deducible[]>('../../assets/deducibles.json')
      .subscribe((data) => {
        this.deducibles = data;
      });
  }

  informacion(deducible: Deducible) {
    alert(
      'Esta es información adicional sobre ' +
        deducible.categoria +
        ': ' +
        deducible.informacionAdicional
    );
  }

  borrarDeducible(deducible: Deducible) {
    this.deducibles = this.deducibles.filter((d) => d !== deducible);
  }
}
