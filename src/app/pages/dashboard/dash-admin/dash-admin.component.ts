import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dash-admin',
  standalone: true, 
  imports: [RouterModule],
  templateUrl: './dash-admin.component.html',
  styleUrl: './dash-admin.component.css'
})

export class DashAdminComponent {
  role = 'dash-admin';

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }
}
