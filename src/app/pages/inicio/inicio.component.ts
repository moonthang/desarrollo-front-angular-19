import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-inicio',
  standalone: true, 
  imports: [RouterModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  empresas = [
    { nombre: 'U La Gran Colombia', logo: 'assets/img/convenios/u_la_gran_colombia.png' },
    { nombre: 'Expoturismo', logo: 'assets/img/convenios/expoturismo.jpg' },
    { nombre: 'GES', logo: 'assets/img/convenios/GES.png' },
    { nombre: 'Smart', logo: 'assets/img/convenios/logo-smart.png' },
    { nombre: 'Panela Tours', logo: 'assets/img/convenios/panela-tours.jpg' },
    { nombre: 'El Cielo', logo: 'assets/img/convenios/el-cielo.png' },
  ];

  get empresasPorGrupo() {
    if (window.innerWidth <= 768) {
      return [this.empresas];
    }

    const grupos: any[][] = [];
    const size = 3;
    for (let i = 0; i < this.empresas.length; i += size) {
      grupos.push(this.empresas.slice(i, i + size));
    }
    return grupos;
  }

  preguntasFrecuentes = [
    {
      pregunta: '¿Pruedo ser asociado si no soy docente?',
      respuesta: 'Si es personal administrativo activo en el sector educativo oficial o familiar de primer grado de un asociado.'
    },
    {
      pregunta: '¿Como asociado puedo participar en excedentes?',
      respuesta: 'Sí, al ser asociado puede participar en excedentes y beneficios sociales.'
    },
    {
      pregunta: '¿Cómo me puedo afiliar?',
      respuesta: 'Solicita y diligencia el formulario de afiliación.'
    }
  ];


  @ViewChild('ServiciosWrapper') ServiciosWrapper!: ElementRef;
  @ViewChild('ServiciosTrack') ServiciosTrack!: ElementRef;

  scrollLeft() {
    this.ServiciosWrapper.nativeElement.scrollBy({
      left: -250,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.ServiciosWrapper.nativeElement.scrollBy({
      left: 250,
      behavior: 'smooth'
    });
  }

}
