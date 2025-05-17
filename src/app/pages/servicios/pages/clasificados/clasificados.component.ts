import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from './post.service';

@Component({
  selector: 'app-clasificados',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './clasificados.component.html',
  styleUrls: ['./clasificados.component.css']
})
export class ClasificadosComponent implements OnInit {
  posts: any[] = [];
  visiblePosts: any[] = [];
  allTags: string[] = [];
  currentPage = 1;
  postsPerPage = 5;
  totalPages = 1;
  pageNumbers: number[] = [];

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.cargarPosts();
  }

  cargarPosts() {
    this.postService.obtenerPosts().then(snapshot => {
      this.posts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        imagenUrl: doc.data()['imagen'] || doc.data()['imagenUrl'] || null,
        fechaPublicacion: doc.data()['fechaPublicacion']
      }));

      this.allTags = [...new Set(this.posts.flatMap(post => post.etiquetas || []))];

      this.totalPages = Math.ceil(this.posts.length / this.postsPerPage);
      this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);

      this.updateVisiblePosts();
    });
  }

  categoriaSeleccionada: string | null = null;

  filtrarPorCategoria(tag: string) {
    if (this.categoriaSeleccionada === tag) {
      this.categoriaSeleccionada = null;
      this.updateVisiblePosts();
    } else {
      this.categoriaSeleccionada = tag;
      this.updateVisiblePosts();
    }
  }

  updateVisiblePosts() {
    const postsFiltrados = this.categoriaSeleccionada
      ? this.posts.filter(post => (post.etiquetas || []).includes(this.categoriaSeleccionada!))
      : this.posts;

    this.totalPages = Math.ceil(postsFiltrados.length / this.postsPerPage);
    this.pageNumbers = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    const startIndex = (this.currentPage - 1) * this.postsPerPage;
    this.visiblePosts = postsFiltrados.slice(startIndex, startIndex + this.postsPerPage);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updateVisiblePosts();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateVisiblePosts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateVisiblePosts();
    }
  }
}