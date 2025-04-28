import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dash-usuario',
  imports: [RouterModule],
  templateUrl: './dash-usuario.component.html',
  styleUrl: './dash-usuario.component.css'
})
export class DashUsuarioComponent {
  role = localStorage.getItem('role');
}
