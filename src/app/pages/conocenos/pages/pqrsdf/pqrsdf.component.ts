import { Component, inject  } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Pqrsdf } from './pqrsdf.model';
import { PqrsdfService } from './pqrsdf.service';

@Component({
  selector: 'app-pqrsdf',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pqrsdf.component.html',
  styleUrl: './pqrsdf.component.css'
})
 
export class PqrsdfComponent {
  private fb = inject(FormBuilder);
  private pqrsdfService = inject(PqrsdfService);

  pqrsdfForm: FormGroup;
  archivo: File | null = null;
  isSubmitting = false;
  submitSuccess = false;
  errorMessage: string | null = null;

  dependencias = [
    'GERENCIA', 'COORDINACION', 'CREDITOS', 'CONTABILIDAD',
    'TESORERIA', 'COMERCIAL', 'SERVICIO AL CLIENTE',
    'OTROS SERVICIOS', 'CONSEJO DE ADMINISTRACION', 'JUNTA DE VIGILANCIA'
  ];

  motivos = ['PETICION', 'QUEJA', 'RECLAMO', 'SOLICITUD', 'DENUNCIA', 'FELICITACION'];

  constructor() {
    this.pqrsdfForm = this.fb.group({
      fecha: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      confirmarCorreo: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      movil: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      dependencia: ['', Validators.required],
      motivo: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.maxLength(3000)]],
    }, { validators: this.matchEmails });
  }

  matchEmails(form: FormGroup) {
    const email = form.get('correo')?.value;
    const confirmEmail = form.get('confirmarCorreo')?.value;
    return email === confirmEmail ? null : { emailsNoCoinciden: true };
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input?.files?.length) {
      this.archivo = input.files[0];
    }
  }

  async onSubmit() {
    if (this.pqrsdfForm.invalid || this.isSubmitting) return;

    this.isSubmitting = true;
    this.errorMessage = null;
    this.submitSuccess = false;

    const { confirmarCorreo, ...formValues } = this.pqrsdfForm.value;

    const pqrsdfData: Pqrsdf = {
      ...formValues,
      fechaCreacion: new Date().toISOString(),
      estado: 'pendiente'
    };

    try {
      await this.pqrsdfService.createPqrsdf(pqrsdfData, this.archivo ?? undefined);
      this.submitSuccess = true;
      this.pqrsdfForm.reset();
      this.archivo = null;
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      this.errorMessage = 'Ocurrió un error al enviar el formulario. Por favor intenta nuevamente.';
    } finally {
      this.isSubmitting = false;
    }
  }
}