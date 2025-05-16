import { Component } from '@angular/core';

@Component({
  selector: 'app-convenios',
  standalone: true,
  imports: [],
  templateUrl: './convenios.component.html',
  styleUrl: './convenios.component.css'
})
export class ConveniosComponent {
  categorias = [
    { nombre: 'Destacados', icono: 'bi-star-fill' },
    { nombre: 'Educación', icono: 'bi-journal-bookmark' },
    { nombre: 'Entretenimiento', icono: 'bi-film' },
    { nombre: 'Deporte', icono: 'bi-trophy' },
    { nombre: 'Turismo', icono: 'bi-map' },
    { nombre: 'Seguros y bienestar', icono: 'bi-bookmark-heart' }
  ]

  cards = [
    { categoria: 'Educación',
      nombre: 'Smart', 
      descripcion: 'Ofrece cursos de inglés y francés para todos los niveles, desde A1 hasta C1 en inglés.', 
      logo: 'assets/img/convenios/logo-smart.png', 
      imagen: 'https://m.smart.edu.co/wp-content/uploads/2021/11/M1-copia-1-scaled-1.webp', 
      destacado: false
    },
    { categoria: 'Educación',
      nombre: 'Universidad La Gran Colombia', 
      descripcion: 'La Universidad La Gran Colombia es una institución de Educación Superior, incluyente, comprometida con la excelencia académica, dedicada a la formación integral de profesionales desde una perspectiva socio humanística y de responsabilidad social.', 
      logo: 'assets/img/convenios/u_la_gran_colombia.png', 
      imagen: 'https://www.ugc.edu.co/templates/yootheme/cache/bc/sede-seccional-armenia-ugc-bc677384.webp', 
      destacado: false
    },
    { categoria: 'Entretenimiento',
      nombre: 'Salitre Mágico', 
      descripcion: 'Parque #1 en Diversión. Si no lo crees, visítanos y #DéjateLlevar por la adrenalina.', 
      logo: 'assets/img/convenios/salitre-magico.png', 
      imagen: 'https://salitremagico.com.co/wp-content/uploads/2022/07/supershot-01.jpg', 
      destacado: true
    },
    { categoria: 'Entretenimiento',
      nombre: 'Cine Colombia', 
      descripcion: 'Cine.', 
      logo: 'assets/img/convenios/cineco.webp', 
      imagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/Y3BD5625LNBE3E2KLC6FLULF7E.jpg', 
      destacado: false
    },
    { categoria: 'Entretenimiento',
      nombre: 'Teatro Nacional', 
      descripcion: 'Ver teatro en una de nuestras cinco salas, es vivir con pasión los dramas, las comedias, las músicas y las danzas de la ciudad, el país y el mundo.', 
      logo: 'assets/img/convenios/LOGO-TEATRO-NACIONA.webp', 
      imagen: 'https://blog.fempha.com.co/wp-content/uploads/2025/01/Teatro-Nacional.png', 
      destacado: false
    },
    { categoria: 'Deporte',
      nombre: 'BODYTECH', 
      descripcion: 'El mejor club médico deportivo de toda Latinoamérica. Actualmente cuenta con más de 87 clubes en Colombia, Perú y Chile.', 
      logo: 'assets/img/convenios/bodytech.png', 
      imagen: 'https://bodytech-dev.s3.us-west-2.amazonaws.com/sedes/6105466090c76.jpg', 
      destacado: true
    },
    { categoria: 'Turismo',
      nombre: 'El Cielo', 
      descripcion: 'Glamping.', 
      logo: 'assets/img/convenios/el-cielo.png', 
      imagen: 'https://el-cielo-glamping-251827.todos-los-hoteles-cundinamarca.com/data/Images/OriginalPhoto/11758/1175841/1175841748/image-caqueza-el-cielo-glamping-251827-1.JPEG', 
      destacado: false
    },
    { categoria: 'Turismo',
      nombre: 'Expoturismo', 
      descripcion: 'Viajes de integración, individuales y grupales.',
      logo: 'assets/img/convenios/expoturismo.jpg', 
      imagen: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',  
      destacado: true
    },
    { categoria: 'Turismo',
      nombre: 'Rutas Colombianas', 
      descripcion: 'Rutas colombianas Viajes y Turismo es una empresa operadora enfocada en la organización de paquetes turísticos, eventos...',
      logo: 'assets/img/convenios/rutas-colombianas.jpeg', 
      imagen: 'https://scontent.feoh1-1.fna.fbcdn.net/v/t39.30808-6/488448251_1236170534722992_1216793910450192078_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Ei2FwXZMchgQ7kNvwHz_9dV&_nc_oc=AdnZYxgxE_CYIN1R4xP94o82OfUJ9ZwfYstDWTgZwxDyyqQknsKkpyyDypsLmWyRfo0&_nc_zt=23&_nc_ht=scontent.feoh1-1.fna&_nc_gid=lS9h-ZKvsiuT2duWW9eyMQ&oh=00_AfJZIzsTaIuPKXyVvMpbTCsCDJJk0KpK76rTzPaFB1dsOg&oe=682D5977',  
      destacado: true
    },
    { categoria: 'Turismo',
      nombre: 'Parque Hacienda Napoles', 
      descripcion: 'La aventura en familia es la protagonista en este espacio de atracciones acuáticas que con seguridad no te querrás perder. Cataratas gigantes, toboganes, mamuts, zona de comidas, piscinas y ríos te esperan.',
      logo: 'assets/img/convenios/napoles.png', 
      imagen: 'https://haciendanapoles.com/wp-content/uploads/2024/09/cobras-toboganes-1290x725.jpg',  
      destacado: false
    },
    { categoria: 'Seguros y bienestar',
      nombre: 'Proexequial', 
      descripcion: 'Conozca los planes que tenemos para que proteja a su familia, sus colaboradores y todas las personas que son prioridad para usted.',
      logo: 'assets/img/convenios/proexequial.jpg', 
      imagen: 'https://proexequial.com/static_files/images/about-2.png',  
      destacado: true
    },
    { categoria: 'Seguros y bienestar',
      nombre: 'Colmedica', 
      descripcion: 'Servicios médicos ambulatorios. Puedes programar consultas médicas particulares.',
      logo: 'assets/img/convenios/Colmedica.png', 
      imagen: 'https://www.adom.com.co/wp-content/uploads/2024/07/Banner-consulta-medica-a-domicilio-ADOM.webp',  
      destacado: false
    },
    { categoria: 'Seguros y bienestar',
      nombre: 'MedPlus', 
      descripcion: 'Somos una compañía FRESCA te brindamos la tranquilidad en salud que te permite relajarte y despreocuparte de una cosa menos, en eso nos enfocamos cada día.',
      logo: 'assets/img/convenios/medplus.png', 
      imagen: 'https://medplus.com.co/wp-content/uploads/2021/04/valledupar.jpg',  
      destacado: false
    },
    { categoria: 'Seguros y bienestar',
      nombre: 'Wellnes SPA', 
      descripcion: 'Un completo Circuito Hídrico, cabinas Duo y la mejor atención harán de tu visita una experiencia inolvidable.',
      logo: 'assets/img/convenios/wellnes-spa.webp', 
      imagen: 'https://www.wellnesspamovil.com/wp-content/uploads/2023/01/wellness.jpg',  
      destacado: false
    },
  ];

  categoriaSeleccionada = this.categorias[0].nombre;

  filtrarCards() {
    if (this.categoriaSeleccionada === 'Destacados') {
      return this.cards.filter(c => c.destacado);
    }
    return this.cards.filter(c => c.categoria === this.categoriaSeleccionada);
  }

  seleccionarCategoria(nombre: string) {
    this.categoriaSeleccionada = nombre;
  }
}
