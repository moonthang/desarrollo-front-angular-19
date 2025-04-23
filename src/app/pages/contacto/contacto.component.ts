import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  preguntaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.preguntaForm = this.fb.group({
      nombre: ['', Validators.required, Validators.maxLength(100)],
      correo: ['', [Validators.required, Validators.email]],
      confirmarCorreo: ['', [Validators.required, Validators.email]],
      descripcion: ['', Validators.required],
    });
  }

  matchEmails(form: FormGroup) {
    const email = form.get('correo')?.value;
    const confirmEmail = form.get('confirmarCorreo')?.value;
    return email === confirmEmail ? null : { emailsNoCoinciden: true };
  }

  enviarPregunta() {
    if (this.preguntaForm.valid) {
      console.log(this.preguntaForm.value);
    }
  }
}
