import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit  {


  constructor() { }

  ngOnInit(): void { }
  
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
