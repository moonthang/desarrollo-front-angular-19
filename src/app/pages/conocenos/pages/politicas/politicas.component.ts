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
  categoriaActual: string = 'solicitudes';

  documentos: Documento[] = [
    {
      categoria: 'solicitudes',
      nombre: 'Formato de solicitud de asociación',
      nombreArchivo: 'Formato solicitud de asociación.pdf',
      imagen: 'assets/img/formatos/sol-asociacion.png',
      mostrarHover: true
    },
    {
      categoria: 'solicitudes',
      nombre: 'Formato de solicitud de crédito',
      nombreArchivo: 'Formato solicitud de crédito.pdf',
      imagen: 'assets/img/formatos/sol-credito.png',
      mostrarHover: true
    },
    {
      categoria: 'solicitudes',
      nombre: 'Formato de presentación de familiares para asociación',
      nombreArchivo: 'sol-asociacion-familiar.pdf',
      imagen: 'assets/img/formatos/sol-asociacion-familiares.png',
      mostrarHover: true
    },
    {
      categoria: 'solicitudes',
      nombre: 'Formato solicitud de giro',
      nombreArchivo: 'Solicitud-de-giro.pdf',
      imagen: 'assets/img/formatos/sol-giro.png',
      mostrarHover: true
    },
    {
      categoria: 'solicitudes',
      nombre: 'Formato solicitud de axuilio de solidaridad',
      nombreArchivo: 'Formato-auxilio-de-solidaridad.pdf',
      imagen: 'assets/img/formatos/sol-aux-solidaridad.png',
      mostrarHover: true
    },
    {
      categoria: 'solicitudes',
      nombre: 'Formato solicitud de axuilio educativo',
      nombreArchivo: 'Formato-solicitud-auxilio-educativo.pdf',
      imagen: 'assets/img/formatos/sol-aux-educativo.png',
      mostrarHover: true
    },
    {
      categoria: 'solicitudes',
      nombre: 'Formato solicitud de retiro voluntario',
      nombreArchivo: 'Formato-de-retiro.pdf',
      imagen: 'assets/img/formatos/sol-retiro.png',
      mostrarHover: true
    },
    {
      categoria: 'autorizaciones',
      nombre: 'Autorización de descuentos por aportes',
      nombreArchivo: 'SED APORTES.pdf',
      imagen: 'assets/img/formatos/sed-aportes.png',
      mostrarHover: true
    },
    {
      categoria: 'autorizaciones',
      nombre: 'Autorización de descuentos por servicios',
      nombreArchivo: 'SED-SERVICIOS.pdf',
      imagen: 'assets/img/formatos/sed-servicios.png',
      mostrarHover: true
    },
    {
      categoria: 'autorizaciones',
      nombre: 'Autorización para asociar menores de edad',
      nombreArchivo: 'Autorizacion-para-asociar-menores-de-edad.pdf',
      imagen: 'assets/img/formatos/aso-menor-edad.png',
      mostrarHover: true
    },
    {
      categoria: 'politicas',
      nombre: 'Política de protección de datos personales',
      nombreArchivo: 'Politica-de-tratamiento-de-datos.pdf',
      imagen: 'assets/img/formatos/pol-tratamiento-datos.png',
      mostrarHover: true
    },
    {
      categoria: 'politicas',
      nombre: 'Política integral',
      nombreArchivo: 'Politica-Integral.pdf',
      imagen: 'assets/img/formatos/pol-integral.png',
      mostrarHover: true
    },
    {
      categoria: 'politicas',
      nombre: 'Reglamento de auxilio educativo',
      nombreArchivo: 'Reglamento-Auxilio-Educativo.pdf',
      imagen: 'assets/img/formatos/reg-aux-educativo.png',
      mostrarHover: true
    },
    {
      categoria: 'politicas',
      nombre: 'Reglamento de auxilio de aportes sociales',
      nombreArchivo: 'Reglamento-de-Aportes.pdf',
      imagen: 'assets/img/formatos/reg-aux-aportes.png',
      mostrarHover: true
    },
    {
      categoria: 'politicas',
      nombre: 'Reglamento de fondo de solidaridad',
      nombreArchivo: 'Reglamento-Fondo-de-Solidaridad.pdf',
      imagen: 'assets/img/formatos/reg-aux-solidaridad.png',
      mostrarHover: true
    }
  ];

  get documentosFiltrados() {
    return this.documentos.filter(p => p.categoria === this.categoriaActual);
  }

  cambiarCategoria(categoria: string) {
    this.categoriaActual = categoria;
  }

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
