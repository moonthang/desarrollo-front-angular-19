import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { PreguntaFService } from '../preguntaF.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-pregunta-f',
  standalone: true,
  imports: [RouterModule, DatePipe, FormsModule],
  templateUrl: './get-pregunta-f.component.html',
  styleUrl: './get-pregunta-f.component.css'
})
export class GetPreguntaFComponent implements OnInit {
  preguntafList: any[] = [];
  loadingStates: { [key: string]: boolean } = {};
  constructor(private preguntaFService: PreguntaFService) { }

  async ngOnInit() {
    await this.loadPreguntaF();
  }
  
  async loadPreguntaF() {
    try {
      this.preguntafList = await this.preguntaFService.getAllPreguntaF();
    } catch (error) {
      console.error('Error al obtener los mensajes:', error);
    }
  }
}