import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dash-editor',
  imports: [RouterModule],
  templateUrl: './dash-editor.component.html',
  styleUrl: './dash-editor.component.css'
})
export class DashEditorComponent {
  role = localStorage.getItem('role');
}
