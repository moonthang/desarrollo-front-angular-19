import { Component } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  imports: [],
  templateUrl: './quienes-somos.component.html',
  styleUrl: './quienes-somos.component.css'
})
export class QuienesSomosComponent {
  toggleVideo(video: HTMLVideoElement, button: HTMLButtonElement, event: MouseEvent): void {
    event.stopPropagation();

    if (video.paused) {
      video.play();
      button.style.display = 'none';
    } else {
      video.pause();
      button.textContent = '⏸';
      button.style.display = 'flex';
    }
  }

  onVideoClick(video: HTMLVideoElement, button: HTMLButtonElement): void {
    if (video.paused) {
      video.play();
      button.style.display = 'none';
    } else {
      video.pause();
      button.textContent = '⏸';
      button.style.display = 'flex';
    }
  }
}