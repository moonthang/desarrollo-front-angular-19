import { Component, inject } from '@angular/core';
import { FormsCreditoComponent } from '../../../../components/forms/forms-credito/forms-credito.component'
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-educacion',
  standalone: true,
  imports: [RouterModule, FormsCreditoComponent],
  templateUrl: './educacion.component.html',
  styleUrl: './educacion.component.css'
})
export class EducacionComponent {
}