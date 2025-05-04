import { Routes } from '@angular/router';

import { AfiliacionComponent } from './pages/afiliacion/afiliacion.component';
import { ConocenosComponent } from './pages/conocenos/conocenos.component';
import { PoliticasComponent } from './pages/conocenos/pages/politicas/politicas.component';
import { PqrsdfComponent } from './pages/conocenos/pages/pqrsdf/pqrsdf.component';
import { QuienesSomosComponent } from './pages/conocenos/pages/quienes-somos/quienes-somos.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { FaqComponent } from './pages/faq/faq.component';
import { HerramientasComponent } from './pages/herramientas/herramientas.component';
import { AppComponent } from './pages/herramientas/pages/app/app.component';
import { CampusComponent } from './pages/herramientas/pages/campus/campus.component';
import { OficinaComponent } from './pages/herramientas/pages/oficina/oficina.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { TurismoComponent } from './pages/servicios/pages/turismo/turismo.component';
import { AuxiliosComponent } from './pages/servicios/pages/auxilios/auxilios.component';
import { ClasificadosComponent } from './pages/servicios/pages/clasificados/clasificados.component';
import { ConveniosComponent } from './pages/servicios/pages/convenios/convenios.component';
import { CreditosComponent } from './pages/servicios/pages/creditos/creditos.component';
import { EducacionComponent } from './pages/servicios/pages/educacion/educacion.component';
import { SegurosComponent } from './pages/servicios/pages/seguros/seguros.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'afiliacion', component: AfiliacionComponent },
  { path: 'conocenos', component: ConocenosComponent },
  { path: 'conocenos/politicas', component: PoliticasComponent },
  { path: 'conocenos/pqrsdf', component: PqrsdfComponent },
  { path: 'conocenos/quienes-somos', component: QuienesSomosComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'herramientas', component: HerramientasComponent },
  { path: 'herramientas/app', component: AppComponent},
  { path: 'herramientas/campus', component: CampusComponent},
  { path: 'herramientas/oficina', component: OficinaComponent},
  { path: 'pagos', component: PagosComponent },
  { path: 'pqrsdf', component: PqrsdfComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'servicios/auxilios', component: AuxiliosComponent },
  { path: 'servicios/clasificados', component: ClasificadosComponent },
  { path: 'servicios/convenios', component: ConveniosComponent },
  { path: 'servicios/creditos', component: CreditosComponent },
  { path: 'servicios/educacion', component: EducacionComponent },
  { path: 'servicios/seguros', component: SegurosComponent },
  { path: 'servicios/turismo', component: TurismoComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dash-admin',
    loadComponent: () => import('./pages/dashboard/dash-admin/dash-admin.component').then(m => m.DashAdminComponent),
    children: [
      { 
        path: 'get-pqrsdf', 
        loadComponent: () => import('./pages/conocenos/pages/pqrsdf/get-pqrsdf/get-pqrsdf.component').then(m => m.GetPqrsdfComponent) 
      },
      { 
        path: 'get-pregunta-f',
        loadComponent: () => import('./pages/contacto/get-pregunta-f/get-pregunta-f.component').then(m => m.GetPreguntaFComponent) 
      },
      { 
        path: 'get-credito-f',
        loadComponent: () => import('./pages/servicios/get-credito-f/get-credito-f.component').then(m => m.GetCreditoFComponent) 
      },
      { 
        path: 'publish-clasificado',
        loadComponent: () => import('./pages/servicios/pages/clasificados/publish-clasificado/publish-clasificado.component').then(m => m.PublishClasificadoComponent) 
      },
      { 
        path: 'manage-clasificado',
        loadComponent: () => import('./pages/servicios/pages/clasificados/manage-clasificado/manage-clasificado.component').then(m => m.ManageClasificadoComponent) 
      },
      { path: '', redirectTo: 'get-pqrsdf', pathMatch: 'full' }
    ]
  },
  {
    path: 'dash-editor',
    loadComponent: () => import('./pages/dashboard/dash-editor/dash-editor.component').then(m => m.DashEditorComponent),
    children: [
      { 
        path: 'get-pqrsdf', 
        loadComponent: () => import('./pages/conocenos/pages/pqrsdf/get-pqrsdf/get-pqrsdf.component').then(m => m.GetPqrsdfComponent) 
      },
      { 
        path: 'get-pregunta-f',
        loadComponent: () => import('./pages/contacto/get-pregunta-f/get-pregunta-f.component').then(m => m.GetPreguntaFComponent) 
      },
      { 
        path: 'get-credito-f',
        loadComponent: () => import('./pages/servicios/get-credito-f/get-credito-f.component').then(m => m.GetCreditoFComponent) 
      },
      { 
        path: 'publish-clasificado',
        loadComponent: () => import('./pages/servicios/pages/clasificados/publish-clasificado/publish-clasificado.component').then(m => m.PublishClasificadoComponent) 
      },
      { 
        path: 'manage-clasificado',
        loadComponent: () => import('./pages/servicios/pages/clasificados/manage-clasificado/manage-clasificado.component').then(m => m.ManageClasificadoComponent) 
      },
      { path: '', redirectTo: 'get-pqrsdf', pathMatch: 'full' }
    ]
  },
  {
    path: 'dash-usuario',
    loadComponent: () => import('./pages/dashboard/dash-usuario/dash-usuario.component').then(m => m.DashUsuarioComponent)
  },
  

  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', redirectTo: 'inicio' }
];