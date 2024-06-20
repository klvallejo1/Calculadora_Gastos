import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../Gasto';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent implements OnInit {
  gasto:Gasto[]=[];

  constructor(private gastoService:GastoService){
    this.gastoService.obtenerDatos().subscribe(data =>
      {
        console.log(data);
        this.gasto=data;
      });
  }

  ngOnInit(): void {
    
  }

}
