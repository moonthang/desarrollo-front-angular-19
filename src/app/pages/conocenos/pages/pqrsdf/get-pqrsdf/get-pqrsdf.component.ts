import { Component, OnInit } from '@angular/core';
import { DatePipe  } from '@angular/common';
import { PqrsdfService } from '../pqrsdf.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-pqrsdf',
  standalone: true,
  imports: [RouterModule, DatePipe , FormsModule],
  templateUrl: './get-pqrsdf.component.html',
  styleUrl: './get-pqrsdf.component.css'
})
export class GetPqrsdfComponent implements OnInit {
  pqrsdfList: any[] = [];
  loadingStates: { [key: string]: boolean } = {};
  constructor(private pqrsdfService: PqrsdfService) {}

  async ngOnInit() {
    await this.loadPqrsdf();
  }

  async loadPqrsdf() {
    try {
      this.pqrsdfList = await this.pqrsdfService.getAllPqrsdf();
    } catch (error) {
      console.error('Error al obtener PQRSDF:', error);
    }
  }

  async onStatusChange(item: any) {
    this.loadingStates[item.id] = true;
    try {
      await this.pqrsdfService.updatePqrsdfStatus(item.id, item.estado);
      await this.loadPqrsdf();
    } catch (error) {
      console.error('Error al cambiar estado:', error);
      item.estado = this.getPreviousStatus(item.estado);
    } finally {
      this.loadingStates[item.id] = false;
    }
  }

  getPreviousStatus(current: string): string {
    if (current === 'resuelto') return 'en_proceso';
    if (current === 'en_proceso') return 'pendiente';
    return 'pendiente';
  }

  getStatusClass(estado: string): string {
    if (!estado) return '';
    return estado.toLowerCase().replace(' ', '_');
  }
}