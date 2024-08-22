import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  ngAfterViewInit(): void {
    this.playHeroVideo();
  }

  private playHeroVideo(): void {
    const heroVideo = document.getElementById('heroVideo') as HTMLVideoElement;
    if (heroVideo) {
      heroVideo.muted = true;
      heroVideo.setAttribute('muted', 'true');
      heroVideo.autoplay = true;
      heroVideo.setAttribute('autoplay', 'true');
      heroVideo.loop = true;
      heroVideo.setAttribute('loop', 'true');
      heroVideo.play().catch(error => {
        // Handle video play error if needed
        console.error('Error attempting to play video:', error);
      });
    }
  }
}
