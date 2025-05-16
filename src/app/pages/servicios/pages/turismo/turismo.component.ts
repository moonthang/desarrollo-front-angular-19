import { Component } from '@angular/core';
import { FormsCreditoComponent } from '../../../../components/forms/forms-credito/forms-credito.component'

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-turismo',
  standalone: true,
  imports: [RouterModule, FormsCreditoComponent],
  templateUrl: './turismo.component.html',
  styleUrl: './turismo.component.css'
})
export class TurismoComponent {
  
}
