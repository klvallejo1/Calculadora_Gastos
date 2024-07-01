import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
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

  salud = new FormControl('', [Validators.required, Validators.max(15238.6)]);

  ingresoAnual = new FormControl('');

  datosRecopilados: any[] = [];

  fields = [
    {
      id: 'alimentacion',
      label: 'Alimentación',
      control: this.alimentacion,
      placeholder: 'Ingresa el monto para alimentación',
      max: 3809.65,
    },
    {
      id: 'vivienda',
      label: 'Vivienda',
      control: this.vivienda,
      placeholder: 'Ingresa el monto para vivienda',
      max: 3809.65,
    },
    {
      id: 'educacion',
      label: 'Educación',
      control: this.educacion,
      placeholder: 'Ingresa el monto para educación',
      max: 3809.65,
    },
    {
      id: 'vestimenta',
      label: 'Vestimenta',
      control: this.vestimenta,
      placeholder: 'Ingresa el monto para vestimenta',
      max: 3809.65,
    },
    {
      id: 'salud',
      label: 'Salud',
      control: this.salud,
      placeholder: 'Ingresa el monto para salud',
      max: 15238.60,
    },
  ];

  maxTotalSum = 15238.60;

  get formInvalid(): boolean {
    return (
      this.alimentacion.invalid ||
      this.vivienda.invalid ||
      this.educacion.invalid ||
      this.vestimenta.invalid ||
      this.salud.invalid ||
      this.totalSum > this.maxTotalSum
    );
  }

  get totalSum(): number {
    return this.fields.reduce(
      (sum, field) => sum + parseFloat(field.control.value || '0'),
      0
    );
  }

  get baseImponible(): number {
    const ingresos = parseFloat(this.ingresoAnual.value || '0');
    const gastos = this.totalSum;
    return ingresos - gastos;
  }

  get excedenteFunc(): number {
    let fraccionBasica = 0;

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
    let porcentaje = 0;

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
    let impuesto = 0;

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
