import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  alimentacion = new FormControl('', [
    Validators.required,
    Validators.max(3809.65),
  ]);

  vivienda = new FormControl('', [
    Validators.required,
    Validators.max(3809.65),
  ]);

  educacion = new FormControl('', [
    Validators.required,
    Validators.max(3809.65),
  ]);

  vestimenta = new FormControl('', [
    Validators.required,
    Validators.max(3809.65),
  ]);

  salud = new FormControl('', [
    Validators.required, 
    Validators.max(3809.65)
  ]);

  ingresoAnual = new FormControl('');

  datosRecopilados: any[]=[];

  get formInvalid(): boolean {
    return (
      this.alimentacion.invalid ||
      this.vivienda.invalid ||
      this.educacion.invalid ||
      this.vestimenta.invalid ||
      this.salud.invalid
    );
  }

  get totalSum(): number {
    return (
      parseFloat(this.alimentacion.value || '0') +
      parseFloat(this.vivienda.value || '0') +
      parseFloat(this.educacion.value || '0') +
      parseFloat(this.vestimenta.value || '0') +
      parseFloat(this.salud.value || '0')
    );
  }

  get baseImponible(): number {
    const ingresos = parseFloat(this.ingresoAnual.value || '0');
    const gastos = this.totalSum;

    return ingresos - gastos;
  }

  get excedenteFunc(): number {
    var fraccionBasica = 0;

    if (this.baseImponible <= 11722) {
      fraccionBasica = 0;
    } else if (this.baseImponible <= 14930 && this.baseImponible >= 11722) {
      fraccionBasica = 11722;
    } else if (this.baseImponible <= 19385 && this.baseImponible >= 14930) {
      fraccionBasica = 14930;
    } else if (this.baseImponible <= 25638 && this.baseImponible >= 19385) {
      fraccionBasica = 19385;
    } else if (this.baseImponible <= 33738 && this.baseImponible >= 25638) {
      fraccionBasica = 25638;
    } else if (this.baseImponible <= 44721 && this.baseImponible >= 33738) {
      fraccionBasica = 33738;
    } else if (this.baseImponible <= 59537 && this.baseImponible >= 44721) {
      fraccionBasica = 44721;
    } else if (this.baseImponible <= 79388 && this.baseImponible >= 59537) {
      fraccionBasica = 59537;
    } else if (this.baseImponible <= 105580 && this.baseImponible >= 79388) {
      fraccionBasica = 79388;
    } else if (this.baseImponible >= 105580) {
      fraccionBasica = 105580;
    }

    return this.baseImponible - fraccionBasica;
  }

  get porcentajeExcedente(): number {
    var porcentaje = 0;

    if (this.baseImponible <= 11722) {
      porcentaje = 0;
    } else if (this.baseImponible <= 14930 && this.baseImponible >= 11722) {
      porcentaje = 0.05;
    } else if (this.baseImponible <= 19385 && this.baseImponible >= 14930) {
      porcentaje = 0.1;
    } else if (this.baseImponible <= 25638 && this.baseImponible >= 19385) {
      porcentaje = 0.12;
    } else if (this.baseImponible <= 33738 && this.baseImponible >= 25638) {
      porcentaje = 0.15;
    } else if (this.baseImponible <= 44721 && this.baseImponible >= 33738) {
      porcentaje = 0.2;
    } else if (this.baseImponible <= 59537 && this.baseImponible >= 44721) {
      porcentaje = 0.25;
    } else if (this.baseImponible <= 79388 && this.baseImponible >= 59537) {
      porcentaje = 0.3;
    } else if (this.baseImponible <= 105580 && this.baseImponible >= 79388) {
      porcentaje = 0.35;
    } else if (this.baseImponible >= 105580) {
      porcentaje = 0.37;
    }

    return this.excedenteFunc * porcentaje;
  }

  get impuestoFraccionBasica(): number {
    var impuesto = 0;

    if (this.baseImponible <= 11722) {
      impuesto = 0;
    } else if (this.baseImponible <= 14930 && this.baseImponible >= 11722) {
      impuesto = 0;
    } else if (this.baseImponible <= 19385 && this.baseImponible >= 14930) {
      impuesto = 160;
    } else if (this.baseImponible <= 25638 && this.baseImponible >= 19385) {
      impuesto = 606;
    } else if (this.baseImponible <= 33738 && this.baseImponible >= 25638) {
      impuesto = 1356;
    } else if (this.baseImponible <= 44721 && this.baseImponible >= 33738) {
      impuesto = 2571;
    } else if (this.baseImponible <= 59537 && this.baseImponible >= 44721) {
      impuesto = 4768;
    } else if (this.baseImponible <= 79388 && this.baseImponible >= 59537) {
      impuesto = 8472;
    } else if (this.baseImponible <= 105580 && this.baseImponible >= 79388) {
      impuesto = 14427;
    } else if (this.baseImponible >= 105580) {
      impuesto = 23594;
    }

    return impuesto;
  }

  get impuestoRenta(): number {
    return this.impuestoFraccionBasica + this.porcentajeExcedente;
  }

  //Guardar datos en un archivo JSON
  guardarDatos(): void {

    const registro = {
      ingresoAnual: this.ingresoAnual.value,
      baseImponible: this.baseImponible,
      excedente: this.excedenteFunc,
      valorExcedente: this.porcentajeExcedente,
      impuestoRenta: this.impuestoRenta,
    };

    this.datosRecopilados.push(registro);

    alert('Datos guardados en un JSON');
  }
}
