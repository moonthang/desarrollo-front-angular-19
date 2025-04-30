import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-conocenos',
  imports: [RouterModule],
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css'
})
export class ConocenosComponent {
  toggleVideo(video: HTMLVideoElement, button: HTMLButtonElement, event: MouseEvent): void {
    event.stopPropagation();

    if (video.paused) {
      video.play();
      button.style.display = 'none';
    } else {
      video.pause();
      button.textContent = 'Pausa ⏸';
      button.style.display = 'flex';
    }
  }

  onVideoClick(video: HTMLVideoElement, button: HTMLButtonElement): void {
    if (video.paused) {
      video.play();
      button.style.display = 'none';
    } else {
      video.pause();
      button.textContent = 'Pausa ⏸';
      button.style.display = 'flex';
    }
  }
}
