import { Injectable } from '@angular/core';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    this.loadInitialUser();
  }

  private loadInitialUser() {
    const userData = localStorage.getItem('usuario');
    if (userData) {
      this.currentUserSubject.next(JSON.parse(userData));
    }
  }

  async login(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    const rolDoc = await getDoc(doc(db, 'roles', uid));
    
    if (rolDoc.exists()) {
      const userData = { 
        uid, 
        rol: rolDoc.data()['nivel'],
        email: userCredential.user.email
      };
      
      localStorage.setItem('usuario', JSON.stringify(userData));
      this.currentUserSubject.next(userData);
      return userData;
    } else {
      throw new Error('Rol no asignado');
    }
  }

  logout() {
    localStorage.removeItem('usuario');
    this.currentUserSubject.next(null);
  }

  get currentUserValue() {
    return this.currentUserSubject.value;
  }
}
