import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-edit-clasificado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './edit-clasificado.component.html',
  styleUrl: './edit-clasificado.component.css'
})
export class EditClasificadoComponent implements OnInit {
  @ViewChild('autorInput') autorInput!: ElementRef<HTMLInputElement>;
  @ViewChild('tituloInput') tituloInput!: ElementRef<HTMLInputElement>;
  @ViewChild('contenidoInput') contenidoInput!: ElementRef<HTMLTextAreaElement>;
  @ViewChild('imagenInput') imagenInput!: ElementRef<HTMLInputElement>;
  @ViewChild('etiquetasInput') etiquetasInput!: ElementRef<HTMLInputElement>;

  id: string = '';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (this.id) {
      this.postService.obtenerPost(this.id).then(doc => {
        if (doc.exists()) {
          const data = doc.data() as any;
          this.autorInput.nativeElement.value = data.autorNombre;
          this.tituloInput.nativeElement.value = data.titulo;
          this.contenidoInput.nativeElement.value = data.contenido;
          this.imagenInput.nativeElement.value = data.imagenUrl;
          this.etiquetasInput.nativeElement.value = data.etiquetas?.join(', ') || '';
        }
      });
    }
  }

  guardar() {
    const post = {
      autorNombre: this.autorInput.nativeElement.value,
      titulo: this.tituloInput.nativeElement.value,
      contenido: this.contenidoInput.nativeElement.value,
      imagenUrl: this.imagenInput.nativeElement.value,
      etiquetas: this.etiquetasInput.nativeElement.value.split(',').map(e => e.trim())
    };

    this.postService.actualizarPost(this.id, post).then(() => {
      alert('Clasificado actualizado');
      this.router.navigate(['/gestionar-clasificados']);
    });
  }
}