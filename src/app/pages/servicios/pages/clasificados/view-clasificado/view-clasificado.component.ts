import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-view-clasificado',
  standalone: true,
  imports: [CommonModule, RouterModule, DatePipe],
  templateUrl: './view-clasificado.component.html',
  styleUrl: './view-clasificado.component.css'
})
export class ViewClasificadoComponent {
  post: any;


  constructor(private postService: PostService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.obtenerPost(id!).then(doc => {
      if (doc.exists()) {
        this.post = { id: doc.id, ...doc.data() };
      }
    });
  }
}