import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { correoF } from './correoF.model';
import { CorreoFService } from './correoF.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {
  emailForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private correoFService: CorreoFService
  ) {
    this.emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.emailForm.get('email');
  }

  async onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.errorMessage = '';

    const correoData: correoF = {
      email: this.emailForm.value.email
    };

    try {
      await this.correoFService.createCorreoF(correoData);
      this.submitSuccess = true;
      this.emailForm.reset();
      setTimeout(() => this.submitSuccess = false, 5000);
    } catch (error) {
      this.errorMessage = error instanceof Error ? error.message : 'Ocurrió un error al suscribirse';
    } finally {
      this.isSubmitting = false;
    }
  }
}