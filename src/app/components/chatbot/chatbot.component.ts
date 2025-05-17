import { Component, inject } from '@angular/core';
import { CreditoService } from '../../pages/servicios/creditos.service';
import { Creditos } from '../../pages/servicios/creditos.model';
import { FormsModule } from '@angular/forms';

interface ChatMessage {
  sender: 'bot' | 'user';
  text: string;
  time: string;
  options?: string[];
  optionSelected?: boolean;
}

interface ChatNode {
  message: string;
  options?: string[];
}

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrl: './chatbot.component.css'
})
export class ChatbotComponent {
  isOpen = false;
  isTyping = false;
  messages: ChatMessage[] = [];
  showOptions = false;
  currentNodeKey = 'start';

  currentFormStep: string | null = null;
  formData: Partial<Creditos> = {};
  userInput: string = '';

  private creditoService = inject(CreditoService);

  conversationTree: { [key: string]: ChatNode } = {
    start: {
      message: 'Hola. ¿Cómo podemos ayudarte? Tienes preguntas?',
      options: [
        '¿Cómo puedo afiliarme?',
        'Descargar certificados',
        'Solicitar un crédito'
      ]
    },
    '¿Cómo puedo afiliarme?': {
      message: 'Si cumple los requisitos debe de solicitar y diligenciar el formulario de afiliación. Además, adjuntar documentos requeridos.',
      options: ['¿Cuáles son los requisitos?', 'Volver al inicio']
    },
    '¿Cuáles son los requisitos?': {
      message: 'Ser docente o directivo, personal administrativo del sector educativo , familiar de primer grado, cónyuge y el primer grado civil del asociado',
      options: ['Volver al inicio']
    },
    'Descargar certificados': {
      message: 'Puedes descargar tus certificados desde mi Oficina Virtual en "Mis Aportes".',
      options: ['Necesito pagar para recibir el certificado', '¿Cómo accedo a Oficina Virtual?', 'Volver al inicio']
    },
    'Necesito pagar para recibir el certificado': {
      message: 'No sé.',
      options: ['¿Cómo accedo a Oficina Virtual?', 'Volver al inicio']
    },
    '¿Cómo accedo a Oficina Virtual?': {
      message: 'Puedes acceder desde este enlace: https://srv5.financialsoftware.com.co/oficinaCoonadoc/#/home/',
      options: ['Necesito pagar para recibir el certificado', 'Volver al inicio']
    },
    'Solicitar un crédito': {
      message: 'Para solicitar un crédito acércate a nuestra oficina o con uno de nuestros agentes.',
      options: ['¿Dónde queda la oficina?', '¿Cómo me comunico con el agente?', 'Llenar formulario de contacto de crédito', 'Volver al inicio']
    },
    '¿Dónde queda la oficina?': {
      message: 'Cra. 16 # 30 - 63, Bogotá, Colombia',
      options: ['¿Cómo me comunico con el agente?', 'Llenar formulario de contacto de crédito', 'Volver al inicio']
    },
    '¿Cómo me comunico con el agente?': {
      message: 'Credito y cartera: +57 300 8328192',
      options: ['¿Dónde queda la oficina?', 'Llenar formulario de contacto de crédito', 'Volver al inicio']
    },
    'Volver al inicio': {
      message: '¿Cómo podemos ayudarte?',
      options: [
        '¿Cómo puedo afiliarme?',
        'Descargar certificados',
        'Solicitar un crédito'
      ]
    }
  };

  constructor() {
    this.startConversation();
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
  }

  startConversation() {
    this.messages = [];
    this.loadNode('start');
  }

  loadNode(key: string) {
    const node = this.conversationTree[key];
    if (!node) {
      this.addBotMessage('Lo siento, no entendí eso.');
      return;
    }
    this.currentNodeKey = key;
    this.addBotMessage(node.message, node.options);
  }

  addBotMessage(text: string, options?: string[]) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.messages.push({
      sender: 'bot',
      text,
      time,
      options,
      optionSelected: false
    });
  }

  addUserMessage(text: string) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.messages.push({ sender: 'user', text, time });
  }

  selectOption(message: ChatMessage, option: string) {
    message.optionSelected = true;
    this.addUserMessage(option);
    this.isTyping = true;

    setTimeout(() => {
      if (option === 'Llenar formulario de contacto de crédito') {
        this.startCreditForm();
      } else {
        this.loadNode(option);
      }
      this.isTyping = false;
    }, 800);
  }

  startCreditForm() {
    this.formData = {};
    this.currentFormStep = 'nombreCompleto';
    this.addBotMessage('Por favor, ingresa tu nombre completo:');
  }

  async handleUserInput() {
    if (!this.userInput.trim()) return;

    this.addUserMessage(this.userInput);

    switch (this.currentFormStep) {
      case 'nombreCompleto':
        this.formData.nombreCompleto = this.userInput.trim();
        this.currentFormStep = 'telefono';
        this.addBotMessage('Ahora, tu número de teléfono:');
        break;
      case 'telefono':
        this.formData.telefono = this.userInput.trim();
        this.currentFormStep = 'correo';
        this.addBotMessage('Correo electrónico:');
        break;
      case 'correo':
        this.formData.correo = this.userInput.trim();
        this.currentFormStep = 'tipoCredito';
        this.addBotMessage('Selecciona el tipo de crédito:', [
          'Ordinario', 'Extraordinario', 'Emergencia', 'Consumo', 'Educativo', 'Vivienda', 'Turismo', 'Auxilios', 'Seguros'
        ]);
        break;
    }

    this.userInput = '';
  }

  async selectOptionInForm(option: string) {
    const lastBotMessage = this.messages.slice().reverse().find(msg => msg.sender === 'bot' && msg.options && !msg.optionSelected);
    if (lastBotMessage) {
      lastBotMessage.optionSelected = true;
    }

    this.addUserMessage(option);

    if (this.currentFormStep === 'tipoCredito') {
      this.formData.tipoCredito = option;
      this.currentFormStep = 'profesion';
      this.addBotMessage('Selecciona tu profesión:', ['Docente', 'Administrativo', 'Otro']);
    } else if (this.currentFormStep === 'profesion') {
      this.formData.profesion = option;
      await this.submitCreditForm();
    } else {
      this.selectOption(this.messages[this.messages.length - 1], option);
    }
  }


  async submitCreditForm() {
    const credito: Creditos = {
      ...this.formData,
      fechaCreacion: new Date().toISOString()
    } as Creditos;

    try {
      await this.creditoService.createCredito(credito);
      this.addBotMessage('Formulario enviado correctamente. Gracias.', ['Volver al inicio']);
    } catch (error: any) {
      this.addBotMessage('Hubo un error al enviar el formulario. Intenta más tarde.', ['Volver al inicio']);
    }

    this.currentFormStep = null;
    this.formData = {};
  }

  trackOption = (index: number, item: string) => item;
}
