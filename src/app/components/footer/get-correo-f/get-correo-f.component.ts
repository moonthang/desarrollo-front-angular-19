import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CorreoFService } from '../correoF.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-correos',
  standalone: true,
  imports: [RouterModule, DatePipe, CommonModule],
  templateUrl: './get-correo-f.component.html',
  styleUrl: './get-correo-f.component.css'
})

export class GetCorreosComponent implements OnInit {
  correoFList: any[] = [];
  loadingStates: { [key: string]: boolean } = {};

  constructor(private correoFService: CorreoFService) { }

  async ngOnInit() {
    await this.loadCorreos();
  }

  async loadCorreos() {
    try {
      this.correoFList = await this.correoFService.getAllCorreosF();
      this.correoFList.sort((a, b) =>
        new Date(b.fechaCreacion).getTime() - new Date(a.fechaCreacion).getTime()
      );
    } catch (error) {
      console.error('Error al obtener los suscriptores:', error);
    }
  }
}