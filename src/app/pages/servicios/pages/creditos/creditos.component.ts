import { Component } from '@angular/core';
import { FormsCreditoComponent } from '../../../../components/forms/forms-credito/forms-credito.component'


@Component({
  selector: 'app-creditos',
  standalone: true,
  imports: [FormsCreditoComponent],
  templateUrl: './creditos.component.html',
  styleUrl: './creditos.component.css'
})
export class CreditosComponent {
  tiposCreditos = [
    {
      nombre: 'Crédito de Consumo',
      descripcion: 'Destinado a satisfacer múltiples necesidades del asociado y su grupo familiar sin necesidad de demostrar su aplicación o destino.',
      caracteristicas: 'Apalancamiento: hasta 10 veces los aportes. Plazo máximo: 60 meses por nómina y ventanilla. Amortización: Cuota mensual fija.',
      imagen: 'ordinario.jpg'
    },
    {
      nombre: 'Crédito de Vinculación',
      descripcion: 'Destinado incentivar el uso de los productos de COONADOC en los nuevos asociados y conocer su hábito de pago. Este crédito se otorga solo una vez y se tiene derecho cuando el asociado haya hecho su primer aporte de acuerdo con el estatuto',
      caracteristicas: 'Apalancamiento: sin apalancamiento. Monto máximo $3,000,000.  Plazo máximo: 24 meses. Amortización: Cuota mensual fija.',
      imagen: 'vinculacion.jpg'
    },
    {
      nombre: 'Crédito de Vivienda',
      descripcion: 'Destinado a la adquisición de vivienda o del terreno para su construcción y la compra de cartera hipotecaria.',
      caracteristicas: 'Apalancamiento: sin apalancamiento. Monto: mínimo $30,000,000 y máximo 70 SMMLV.  Plazo máximo: 84 meses. Amortización: Cuota mensual fija.',
      imagen: 'vivienda.jpg'
    },
    {
      nombre: 'Crédito para arreglos locativos',
      descripcion: 'Destinado a los arreglos locativos, está condicionado al presupuesto de obra que se realice.',
      caracteristicas: 'Apalancamiento: Sin apalancamiento para pagos por nómina, para pagos por ventanilla de acuerdo con la calificación del asociado y hasta 10 veces los aportes. Monto: mínimo $8,000,000 y máximo $20,000,000.  Plazo máximo: 64 meses. Amortización: Cuota mensual fija.',
      imagen: 'locativos.jpg'
    },
    {
      nombre: 'Crédito de compra de cartera',
      descripcion: 'Mejorar la liquidez del asociado unificando sus obligaciones financieras.',
      caracteristicas: 'Apalancamiento: Para créditos por nómina hasta 20 veces los aportes y para créditos por ventanilla hasta 10 veces los aportes. Monto máximo: $50,000,000.  Plazo máximo: 60 meses. Amortización: Cuota mensual fija.',
      imagen: 'cartera.jpg'
    },
    {
      nombre: 'Crédito hasta los aportes',
      descripcion: 'Destinado a solucionar las necesidades inmediatas de liquidez del asociado y evitar el retiro por este concepto .',
      caracteristicas: 'Monto máximo: hasta el 95% de los aportes.  Plazo máximo: 60 meses. Amortización: Cuota mensual fija.',
      imagen: 'aportes.jpg'
    },
    {
      nombre: 'Crédito de fidelidad',
      descripcion: 'Destinado a los asociados cuyo monto de aportes es superior o igual a $10.000.000 con condiciones preferenciales por su fidelidad de ahorro.',
      caracteristicas: 'Apalancamiento: hasta 2 veces los aportes. Plazo máximo: 48 meses por ventanilla y 60 por nómina. Tasa de interés: 0,5%.',
      imagen: 'fidelidad.jpg'
    },
  ];

  tiposCreditosForm = ['Ordinario', 'Extraordinario', 'Emergencia', 'Consumo', 'Educativo', 'Vivienda', 'Turismo', 'Auxilios', 'Seguros'];
  profesiones = ['Docente', 'Administrativo', 'Otro'];

}