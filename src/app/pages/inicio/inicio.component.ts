import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../servicios/pages/clasificados/post.service';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent implements OnInit {
  clasificadosPosts: any[] = [];
  clasificadosPorGrupo: any[][] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.cargarClasificados();
  }

  cargarClasificados() {
    this.postService.obtenerPosts().then(snapshot => {
      const posts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        imagenUrl: doc.data()['imagen'] || doc.data()['imagenUrl'] || null,
        fechaPublicacion: doc.data()['fechaPublicacion']
      }));

      this.clasificadosPosts = posts.slice(0, 6);
      this.dividirClasificados();
    });
  }

  dividirClasificados() {
    const grupos: any[][] = [];
    const size = 3;
    for (let i = 0; i < this.clasificadosPosts.length; i += size) {
      grupos.push(this.clasificadosPosts.slice(i, i + size));
    }
    this.clasificadosPorGrupo = grupos;
  }

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
      pregunta: '¿Puedo ser asociado si no soy docente?',
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
