import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase';
import { PreguntaF } from './preguntaF.model';

@Injectable({
    providedIn: 'root'
})
export class PreguntaFService {
    private readonly collectionName = 'contactoRapido';

    async createPreguntaF(pregunta: PreguntaF): Promise<string> {
        try {
            if (!pregunta.fechaCreacion) {
                pregunta.fechaCreacion = new Date().toISOString();
            }
            if (pregunta.correo !== pregunta.confirmarCorreo) {
                throw new Error('Los correos electrónicos no coinciden');
            }

            const docRef = await addDoc(collection(db, this.collectionName), pregunta);
            return docRef.id;
        } catch (error) {
            console.error('Error al crear la pregunta:', error);
            throw new Error(this.getFirebaseErrorMessage(error));
        }
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
        return error.message || 'Ocurrió un error al enviar el formulario';
    }

    async getAllPreguntaF() {
        const collectionName = collection(db, 'contactoRapido');
        const snapshot = await getDocs(collectionName);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
}