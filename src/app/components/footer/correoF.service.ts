import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { correoF } from './correoF.model';

@Injectable({
    providedIn: 'root'
})
export class CorreoFService {
    private readonly collectionName = 'suscripciones';

    async createCorreoF(correo: correoF): Promise<string> {
        try {
            if (!correo.fechaCreacion) {
                correo.fechaCreacion = new Date().toISOString();
            }
            const existe = await this.verificarCorreoExistente(correo.email);
            if (existe) {
                throw new Error('Este correo electrónico ya está suscrito');
            }
            const docRef = await addDoc(collection(db, this.collectionName), {
                email: correo.email,
                fechaCreacion: correo.fechaCreacion,
                activo: true
            });
            return docRef.id;
        } catch (error) {
            console.error('Error al crear la suscripción:', error);
            throw new Error(this.getFirebaseErrorMessage(error));
        }
    }

    private async verificarCorreoExistente(email: string): Promise<boolean> {
        const querySnapshot = await getDocs(collection(db, this.collectionName));
        return querySnapshot.docs.some(doc => doc.data()['email'] === email);
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
        return error.message || 'Ocurrió un error al procesar la suscripción';
    }

    async getAllCorreosF() {
        const collectionRef = collection(db, this.collectionName);
        const snapshot = await getDocs(collectionRef);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
}