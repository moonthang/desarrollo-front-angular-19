import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})

export class FaqComponent {
categoriaActual: string = 'creditos';

preguntasFrecuentes: any[] = [
    { 
      pregunta: 'Pregunta sobre créditos', 
      respuesta: 'Lorem ipsum dolor sit amet...', 
      categoria: 'creditos' 
    },
    {
      pregunta: 'Otra pregunta sobre créditos', 
      respuesta: 'Lorem ipsum dolor sit amet...',
      categoria: 'creditos' },
    { 
      pregunta: 'Pregunta sobre asociación', 
      respuesta: 'Lorem ipsum dolor sit amet...', 
      categoria: 'asociacion' 
    },
    { 
      pregunta: 'Pregunta sobre retiro', 
      respuesta: 'Lorem ipsum dolor sit amet...', 
      categoria: 'retiro' 
    },
];

get preguntasFrecuentesFiltradas() {
    return this.preguntasFrecuentes.filter(p => p.categoria === this.categoriaActual);
}

cambiarCategoria(categoria: string) {
    this.categoriaActual = categoria;
}
}
