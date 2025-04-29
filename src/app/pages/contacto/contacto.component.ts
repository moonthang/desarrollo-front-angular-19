import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl, ValidationErrors } from '@angular/forms';
import { PreguntaF } from './preguntaF.model';
import { PreguntaFService } from './preguntaF.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent { 
  preguntaForm: FormGroup;

  isSubmitting = false;
  submitSuccess: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private preguntaFService: PreguntaFService) {
    this.preguntaForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(100)]],
      correo: ['', [Validators.required, Validators.email]],
      confirmarCorreo: ['', [Validators.required, Validators.email]],
      descripcion: ['', Validators.required],
    }, { validators: this.matchEmails });
  }

  matchEmails(control: AbstractControl): ValidationErrors | null {
    const email = control.get('correo')?.value;
    const confirmEmail = control.get('confirmarCorreo')?.value;
    return email === confirmEmail ? null : { emailsNoCoinciden: true };
  }

  async onSubmit() {
    if (this.preguntaForm.invalid || this.isSubmitting) return;

    this.isSubmitting = true;
    this.errorMessage = null;
    this.submitSuccess = null;

    try {
      const pregunta: PreguntaF = {
        ...this.preguntaForm.value,
        fechaCreacion: new Date().toISOString()
      };
      
      await this.preguntaFService.createPreguntaF(pregunta);
      
      this.submitSuccess = 'Tu pregunta ha sido enviada con éxito. ¡Gracias por contactarnos!';
      this.preguntaForm.reset();
    } catch (error: any) {
      console.error('Error al enviar la pregunta:', error);
      this.errorMessage = error.message || 'Hubo un error al enviar tu pregunta. Por favor, inténtalo nuevamente.';
    } finally {
      this.isSubmitting = false;
    }
  }
}