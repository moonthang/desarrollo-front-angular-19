import { Component } from '@angular/core';

@Component({
  selector: 'app-convenios',
  standalone: true,
  imports: [],
  templateUrl: './convenios.component.html',
  styleUrl: './convenios.component.css'
})
export class ConveniosComponent {
  categorias = [
    { nombre: 'Destacados', icono: 'bi-star-fill' },
    { nombre: 'Educación', icono: 'bi-journal-bookmark' },
    { nombre: 'Entretenimiento', icono: 'bi-film' },
    { nombre: 'Deporte', icono: 'bi-trophy' },
    { nombre: 'Turismo', icono: 'bi-map' },
    { nombre: 'Seguros y bienestar', icono: 'bi-bookmark-heart' }
  ]

  cards = [
    { categoria: 'Turismo',
      nombre: 'El Cielo', 
      descripcion: 'Glamping.', 
      logo: 'assets/img/convenios/el-cielo.png', 
      imagen: 'https://el-cielo-glamping-251827.todos-los-hoteles-cundinamarca.com/data/Images/OriginalPhoto/11758/1175841/1175841748/image-caqueza-el-cielo-glamping-251827-1.JPEG', 
      destacado: false },

    { categoria: 'Turismo',
      nombre: 'Expoturismo', 
      descripcion: 'Viajes de integración, individuales y grupales.',
      logo: 'assets/img/convenios/expoturismo.jpg', 
      imagen: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',  
      destacado: true },
  ];

  categoriaSeleccionada = this.categorias[0].nombre;

  filtrarCards() {
    if (this.categoriaSeleccionada === 'Destacados') {
      return this.cards.filter(c => c.destacado);
    }
    return this.cards.filter(c => c.categoria === this.categoriaSeleccionada);
  }

  seleccionarCategoria(nombre: string) {
    this.categoriaSeleccionada = nombre;
  }
}
