export interface Creditos {
    nombreCompleto: string;
    telefono: string;
    correo: string;
    tipoCredito: string;
    profesion: string;
    fechaCreacion?: string;
    estado?: 'sin_contacto' | 'contactado';
  }