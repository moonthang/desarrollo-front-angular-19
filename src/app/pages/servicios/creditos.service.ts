import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { Creditos } from './creditos.model';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  private readonly collectionName = 'creditos';

  async createCredito(credito: Creditos): Promise<string> {
    try {
      if (!credito.fechaCreacion) {
        credito.fechaCreacion = new Date().toISOString();
      }

      const docRef = await addDoc(collection(db, this.collectionName), credito);
      return docRef.id;
    } catch (error) {
      console.error('Error al crear el crédito:', error);
      throw new Error(this.getFirebaseErrorMessage(error));
    }
  }

  async getAllCreditos() {
    const snapshot = await getDocs(collection(db, this.collectionName));
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  private getFirebaseErrorMessage(error: any): string {
    if (error.code) {
      switch (error.code) {
        case 'permission-denied':
          return 'Error de permisos. Por favor contacta al administrador.';
        case 'resource-exhausted':
          return 'Límite de cuota excedido. Intenta más tarde.';
        default:
          return `Error de Firebase: ${error.message || 'Error desconocido'}`;
      }
    }
    return error.message || 'Ocurrió un error al procesar la solicitud';
  }

  async updateCreditoStatus(id: string, newStatus: 'sin_contacto'| 'contactado'): Promise<void> {
          try {
              const docRef = doc(db, this.collectionName, id);
              await updateDoc(docRef, {
                  estado: newStatus,
                  fechaActualizacion: new Date().toISOString()
              });
          } catch (error) {
              console.error('Error al actualizar estado:', error);
              throw new Error('No se pudo actualizar el estado');
          }
      }
}
