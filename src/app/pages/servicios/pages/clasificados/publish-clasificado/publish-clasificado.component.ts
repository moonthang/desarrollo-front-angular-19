import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService } from '../post.service';
import { Post } from '../post.model';

@Component({
  selector: 'app-publish-clasificado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './publish-clasificado.component.html',
  styleUrl: './publish-clasificado.component.css'
})
export class PublishClasificadoComponent {
  @ViewChild('autorInput') autorInput!: ElementRef<HTMLInputElement>;
  @ViewChild('tituloInput') tituloInput!: ElementRef<HTMLInputElement>;
  @ViewChild('contenidoInput') contenidoInput!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('imagenInput') imagenInput!: ElementRef<HTMLInputElement>;
  @ViewChild('etiquetasInput') etiquetasInput!: ElementRef<HTMLInputElement>;

  constructor(private postService: PostService) { }

  publicar() {
    const autorNombre = this.autorInput.nativeElement.value;
    const titulo = this.tituloInput.nativeElement.value;
    const contenido = this.contenidoInput.nativeElement.value;
    const imagenUrl = this.imagenInput.nativeElement.value;
    const etiquetasStr = this.etiquetasInput.nativeElement.value;
    const etiquetas = etiquetasStr ? etiquetasStr.split(',').map(e => e.trim()) : [];

    const post = {
      autorId: '',
      autorNombre,
      contenido,
      estado: 'publicado',
      etiquetas,
      imagenUrl,
      titulo
    };

    this.postService.agregarPost(post).then(() => {
      alert('Clasificado publicado');
      this.limpiarFormulario();
    });
  }

  limpiarFormulario() {
    this.autorInput.nativeElement.value = '';
    this.tituloInput.nativeElement.value = '';
    this.contenidoInput.nativeElement.value = '';
    this.imagenInput.nativeElement.value = '';
    this.etiquetasInput.nativeElement.value = '';
  }
}