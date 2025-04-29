import { Injectable } from '@angular/core';
import { addDoc, collection, getDocs, updateDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../../../../firebase';
import { Pqrsdf } from './pqrsdf.model';

@Injectable({
    providedIn: 'root'
})

export class PqrsdfService {
    async createPqrsdf(pqrsdf: Pqrsdf, file?: File): Promise<string> {
        try {
            if (file) {
                if (file.size > 5 * 1024 * 1024) {
                    throw new Error('El archivo no puede exceder 5MB');
                }

                const filePath = `pqrsdf/${Date.now()}_${file.name}`;
                const storageRef = ref(storage, filePath);
                await uploadBytes(storageRef, file);
                pqrsdf.archivoUrl = await getDownloadURL(storageRef);
            }
            if (!pqrsdf.fecha || !pqrsdf.correo || !pqrsdf.nombre) {
                throw new Error('Faltan campos requeridos');
            }
            const pqrsdfCollection = collection(db, 'pqrsdf');
            const docRef = await addDoc(pqrsdfCollection, pqrsdf);

            return docRef.id;
        } catch (error) {
            console.error('Error detallado:', error);
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

    async updatePqrsdfStatus(id: string, newStatus: 'pendiente' | 'en_proceso' | 'resuelto'): Promise<void> {
        try {
            const docRef = doc(db, 'pqrsdf', id);
            await updateDoc(docRef, {
                estado: newStatus,
                fechaActualizacion: new Date().toISOString()
            });
        } catch (error) {
            console.error('Error al actualizar estado:', error);
            throw new Error('No se pudo actualizar el estado');
        }
    }

    async getAllPqrsdf() {
        const pqrsdfCollection = collection(db, 'pqrsdf');
        const snapshot = await getDocs(pqrsdfCollection);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    }
}