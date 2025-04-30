import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent implements OnInit {
  progress: number = 0;
  pathLength: number = 308;

  ngOnInit(): void {
    this.updateProgress();
  }

  @HostListener('window:scroll')
  updateProgress(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.progress = (scrollY / docHeight) * this.pathLength;

    const scrollElement = document.querySelector('.scroll-to-top');
    if (scrollY > 300) {
      scrollElement?.classList.add('visible');
    } else {
      scrollElement?.classList.remove('visible');
    }
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
