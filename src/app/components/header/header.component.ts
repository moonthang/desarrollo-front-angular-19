import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  mobileMenuVisible = false;
  submenusVisible: { [key: string]: boolean } = {};


  toggleMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
    // Bloquear scroll cuando el menú está abierto
    document.body.style.overflow = this.mobileMenuVisible ? 'hidden' : '';
  }

  // Cerrar menú al hacer clic fuera o al cambiar de ruta
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.mobile-sidebar') && !target.closest('.menu-toggle') && this.mobileMenuVisible) {
      this.toggleMenu();
    }
  }

  // Cerrar menú al redimensionar la pantalla si pasa el breakpoint
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 992 && this.mobileMenuVisible) {
      this.toggleMenu();
    }
  }

  toggleSubmenu(menu: string): void {
    this.submenusVisible[menu] = !this.submenusVisible[menu];
  }
}
