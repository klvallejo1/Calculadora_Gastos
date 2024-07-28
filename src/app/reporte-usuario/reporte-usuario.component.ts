import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reporte-usuario',
  templateUrl: './reporte-usuario.component.html',
  styleUrl: './reporte-usuario.component.css'
})
export class ReporteUsuarioComponent implements OnInit{

  user:User[]=[];

  constructor(private usuario:UserService){
    this.usuario.obtenerDatos().subscribe(data => 
      {
        console.log(data);
        this.user=data;
      });
  }

  ngOnInit(): void { 
  }

}
