import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pqrsdf',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pqrsdf.component.html',
  styleUrl: './pqrsdf.component.css'
})
export class PqrsdfComponent {
  pqrsdfForm: FormGroup;
  archivo: File | null = null;

  dependencias = [
    'GERENCIA', 'COORDINACION', 'CREDITOS', 'CONTABILIDAD',
    'TESORERIA', 'COMERCIAL', 'SERVICIO AL CLIENTE',
    'OTROS SERVICIOS', 'CONSEJO DE ADMINISTRACION', 'JUNTA DE VIGILANCIA'
  ];

  motivos = ['PETICION', 'QUEJA', 'RECLAMO', 'SOLICITUD', 'DENUNCIA', 'FELICITACION'];

  constructor(private fb: FormBuilder) {
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

  onSubmit() {
    if (this.pqrsdfForm.valid) {
      const formData = new FormData();
      Object.entries(this.pqrsdfForm.value).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      if (this.archivo) {
        formData.append('archivo', this.archivo);
      }

      // Aquí enviarías el formData a la API con HttpClient
      console.log('Formulario enviado:', formData);
    }
  }
}
