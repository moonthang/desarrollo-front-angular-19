import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-dash-editor',
  imports: [RouterModule],
  templateUrl: './dash-editor.component.html',
  styleUrl: './dash-editor.component.css'
})
export class DashEditorComponent {
  role = 'dash-editor';

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }
}