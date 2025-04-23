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
    { nombre: 'Prueba', logo: 'assets/img/logos/logo-coonadoc.png' },
    { nombre: 'Prueba', logo: 'assets/img/logos/logo-coonadoc.png' },
    { nombre: 'Prueba', logo: 'assets/img/logos/logo-coonadoc.png' },
    { nombre: 'Prueba', logo: 'assets/img/logos/logo-coonadoc.png' },
    { nombre: 'Prueba', logo: 'assets/img/logos/logo-coonadoc.png' },
    { nombre: 'Prueba', logo: 'assets/img/logos/logo-coonadoc.png' },
    { nombre: 'Prueba', logo: 'assets/img/logos/logo-coonadoc.png' },
  ];

  get empresasPorGrupo() {
    const grupos: any[][] = [];
    const size = 4;
    for (let i = 0; i < this.empresas.length; i += size) {
      grupos.push(this.empresas.slice(i, i + size));
    }
    return grupos;
  }

  preguntasFrecuentes = [
    {
      pregunta: '¿Pregunta 1?',
      respuesta: 'Respuesta 1.'
    },
    {
      pregunta: '¿Pregunta 2?',
      respuesta: 'Respuesta 2.'
    },
    {
      pregunta: '¿Pregunta 3?',
      respuesta: 'Respuesta 3.'
    }
  ];


  @ViewChild('ServiciosWrapper') ServiciosWrapper!: ElementRef;
  @ViewChild('ServiciosTrack') ServiciosTrack!: ElementRef;

  scrollLeft() {
    this.ServiciosWrapper.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.ServiciosWrapper.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

}
