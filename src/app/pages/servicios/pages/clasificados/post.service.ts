import { Injectable } from '@angular/core';
import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc, getDoc, query, orderBy } from 'firebase/firestore';
import { Post } from './post.model';
import { Timestamp } from 'firebase/firestore';
import { db } from '../../../../firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private collectionName = collection(db, 'post');

  agregarPost(post: Post) {
    return addDoc(this.collectionName, {
      ...post,
      fechaPublicacion: Timestamp.now(),
      fechaActualizacion: Timestamp.now()
    });
  }

  obtenerPosts() {
    const q = query(this.collectionName, orderBy('fechaPublicacion', 'desc'));
    return getDocs(q);
  }

  obtenerPost(id: string) {
    const postDoc = doc(db, 'post', id);
    return getDoc(postDoc);
  }

  actualizarPost(id: string, data: Partial<Post>) {
    const postDoc = doc(db, 'post', id);
    return updateDoc(postDoc, {
      ...data,
      fechaActualizacion: Timestamp.now()
    });
  }

  eliminarPost(id: string) {
    const postDoc = doc(db, 'post', id);
    return deleteDoc(postDoc);
  }
}
