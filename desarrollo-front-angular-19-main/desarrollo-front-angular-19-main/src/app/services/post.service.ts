import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, Timestamp } from 'firebase/firestore';
import { Post } from './post.model';

@Injectable({
     providedIn: 'root'
    })
    
export class PostService {
  constructor(private firestore: Firestore) {}

  agregarPost(post: Post) {
    const postsRef = collection(this.firestore, 'post');
    return addDoc(postsRef, {
      ...post,
      fechaPublicacion: Timestamp.now(),
      fechaActualizacion: Timestamp.now()
    });
  }
}
