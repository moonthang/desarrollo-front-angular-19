import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form;
  errorMessage: string | null = null;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  async iniciarSesion() {
    if (this.form.invalid) return;
  
    this.loading = true;
    this.errorMessage = null;
  
    try {
      const { username, password } = this.form.value;
      const userData = await this.authService.login(username!, password!);
      
      switch(userData.rol) {
        case 'admin': 
          this.router.navigate(['/dash-admin']);
          break;
        case 'editor':
          this.router.navigate(['/dash-editor']);
          break;
        case 'cliente':
          this.router.navigate(['/dash-usuario']);
          break;
        default:
          throw new Error('Rol no asignado');
      }
    } catch (error) {
      console.error('Error en login:', error);
      this.errorMessage = this.getErrorMessage(error);
    } finally {
      this.loading = false;
    }
  }

  private getErrorMessage(error: unknown): string {
    if (error instanceof Error) {
      if (error.message.includes('auth/invalid-email')) {
        return 'Correo electrónico inválido';
      } else if (error.message.includes('auth/user-disabled')) {
        return 'Usuario deshabilitado';
      } else if (error.message.includes('auth/user-not-found') || error.message.includes('auth/wrong-password')) {
        return 'Correo o contraseña incorrectos';
      } else if (error.message.includes('Rol no asignado')) {
        return 'Usuario sin rol asignado';
      }
    }
    return 'Error al iniciar sesión. Por favor intenta nuevamente.';
  }
}