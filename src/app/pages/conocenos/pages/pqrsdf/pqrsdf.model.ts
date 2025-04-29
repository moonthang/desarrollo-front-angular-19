export interface Pqrsdf {
    fecha: string;
    correo: string;
    confirmarCorreo: string;
    nombre: string;
    movil: string;
    dependencia: string;
    motivo: string;
    descripcion: string;
    archivoUrl?: string;
    fechaCreacion?: string;
    estado?: 'pendiente' | 'en_proceso' | 'resuelto';
}  