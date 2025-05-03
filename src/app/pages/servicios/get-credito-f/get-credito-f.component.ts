import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CreditoService } from '../creditos.service'

@Component({
  selector: 'app-get-credito-f',
  imports: [RouterModule, DatePipe, FormsModule],
  templateUrl: './get-credito-f.component.html',
  styleUrl: './get-credito-f.component.css'
})
export class GetCreditoFComponent implements OnInit {
  creditofList: any[] = [];
  loadingStates: { [key: string]: boolean } = {};
  constructor(private creditofService: CreditoService) { }

  async ngOnInit() {
    await this.loadCreditof();
  }

  async loadCreditof() {
    try {
      this.creditofList = await this.creditofService.getAllCreditos();
    } catch (error) {
      console.error('Error al obtener PQRSDF:', error);
    }
  }

  async onStatusChange(item: any) {
    this.loadingStates[item.id] = true;
    try {
      await this.creditofService.updateCreditoStatus(item.id, item.estado);
      await this.loadCreditof();
    } catch (error) {
      console.error('Error al cambiar estado:', error);
      item.estado = this.getPreviousStatus(item.estado);
    } finally {
      this.loadingStates[item.id] = false;
    }
  }

  getPreviousStatus(current: string): string {
    if (current === 'contactado') return 'sin_contacto';
    return 'sin_contacto';
  }

  getStatusClass(estado: string): string {
    if (!estado) return '';
    return estado.toLowerCase().replace(' ', '_');
  }
}