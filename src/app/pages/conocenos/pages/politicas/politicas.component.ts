import { Component } from '@angular/core';

interface Documento {
  categoria: string;
  nombre: string;
  nombreArchivo: string;
  imagen: string;
  mostrarHover?: boolean;
}

@Component({
  selector: 'app-politicas',
  imports: [],
  templateUrl: './politicas.component.html',
  styleUrl: './politicas.component.css'
})
export class PoliticasComponent {
  documentos: Documento[] = [{ categoria: 'solicitudes', 
    nombre: 'Formato de solicitud de asociación',
    nombreArchivo: 'Formato solicitud de asociación.pdf',
    imagen: 'assets/img/formatos/sol-asociacion.png',
    mostrarHover: true}
  ];

  verOnline(nombreArchivo: string, categoria: string) {
    const docPath = `assets/docs/${categoria}/${nombreArchivo}`;
    window.open(docPath, '_blank');
  }

  descargar(nombreArchivo: string, categoria: string) {
    const docPath = `assets/docs/${categoria}/${nombreArchivo}`;
    const link = document.createElement('a');
    link.href = docPath;
    link.download = nombreArchivo;
    link.click();
  }
  filtrarDocumentos(categoria: string): Documento[] {
    return this.documentos.filter(doc => doc.categoria === categoria);
  }
}
