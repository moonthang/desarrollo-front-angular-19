import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-manage-clasificado',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './manage-clasificado.component.html',
  styleUrl: './manage-clasificado.component.css'
})
export class ManageClasificadoComponent implements OnInit{
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.cargarPosts();
  }

  cargarPosts() {
    this.postService.obtenerPosts().then(snapshot => {
      this.posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    });
  }

  eliminar(id: string) {
    this.postService.eliminarPost(id).then(() => this.cargarPosts());
  }

  archivar(id: string) {
    this.postService.actualizarPost(id, { estado: 'archivado' }).then(() => this.cargarPosts());
  }
}