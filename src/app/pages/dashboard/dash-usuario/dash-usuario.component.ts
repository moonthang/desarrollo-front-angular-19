import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dash-usuario',
  imports: [RouterModule],
  templateUrl: './dash-usuario.component.html',
  styleUrl: './dash-usuario.component.css'
})
export class DashUsuarioComponent {
  role = 'dash-usuario';

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout(); 
    this.router.navigate(['/inicio']);
  }
}
