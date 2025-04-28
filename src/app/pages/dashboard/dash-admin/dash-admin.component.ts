import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dash-admin',
  imports: [RouterModule],
  templateUrl: './dash-admin.component.html',
  styleUrl: './dash-admin.component.css'
})
export class DashAdminComponent {
  role = localStorage.getItem('role');
}
