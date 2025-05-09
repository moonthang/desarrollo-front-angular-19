import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CreditoService } from '../../creditos.service'
import { Creditos } from '../../creditos.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auxilios',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './auxilios.component.html',
  styleUrl: './auxilios.component.css'
})
export class AuxiliosComponent {
private fb = inject(FormBuilder);
  private creditoService = inject(CreditoService);

  creditoForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  errorMessage: string | null = null;

  tiposCreditosForm = ['Ordinario', 'Extraordinario', 'Emergencia', 'Consumo', 'Educativo', 'Vivienda', 'Turismo', 'Auxilios', 'Seguros'];
  profesiones = ['Docente', 'Administrativo', 'Otro'];

  constructor() {
    this.creditoForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(100)]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      correo: ['', [Validators.required, Validators.email]],
      tipoCredito: ['', Validators.required],
      profesion: ['', Validators.required]
    });
  }

  async onSubmit() {
    if (this.creditoForm.invalid || this.isSubmitting) return;

    this.isSubmitting = true;
    this.errorMessage = null;
    this.submitSuccess = false;

    try {
      const credito: Creditos = {
        ...this.creditoForm.value,
        fechaCreacion: new Date().toISOString()
      };

      await this.creditoService.createCredito(credito);

      this.submitSuccess = true;
      this.creditoForm.reset();
    } catch (error: any) {
      console.error('Error al enviar solicitud:', error);
      this.errorMessage = error.message || 'Error al enviar la solicitud. Intenta nuevamente.';
    } finally {
      this.isSubmitting = false;
    }
  }
}
