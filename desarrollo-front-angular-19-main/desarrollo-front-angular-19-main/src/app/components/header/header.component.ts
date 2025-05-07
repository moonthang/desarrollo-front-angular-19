import { Component, HostListener, OnDestroy } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, TitleCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnDestroy {
  mobileMenuVisible = false;
  submenusVisible: { [key: string]: boolean } = {};
  usuarioLogueado: any = null;
  private authSubscription: Subscription;

  constructor(private router: Router, private authService: AuthService) {
    this.authSubscription = this.authService.currentUser$.subscribe(user => {
      this.usuarioLogueado = user;
    });
  }

  toggleMenu() {
    this.mobileMenuVisible = !this.mobileMenuVisible;
    document.body.style.overflow = this.mobileMenuVisible ? 'hidden' : '';
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.mobile-sidebar') && !target.closest('.menu-toggle') && this.mobileMenuVisible) {
      this.toggleMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if (window.innerWidth > 992 && this.mobileMenuVisible) {
      this.toggleMenu();
    }
  }

  toggleSubmenu(menu: string): void {
    this.submenusVisible[menu] = !this.submenusVisible[menu];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/inicio']);
  }

  getDashboardRoute() {
    if (!this.usuarioLogueado) return '/login';
    switch (this.usuarioLogueado.rol) {
      case 'admin': return '/dash-admin';
      case 'editor': return '/dash-editor';
      case 'cliente': return '/dash-usuario';
      default: return '/login';
    }
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}