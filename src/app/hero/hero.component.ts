import { AfterViewInit, Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit  {
  public contactLink!: string;

  constructor() {
    this.setContactLink();
  }

  ngOnInit(): void {
    this.setContactLink();
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event: any) {
    this.setContactLink();
  }

  setContactLink() {
    if (window.innerWidth <= 992) {
      this.contactLink = 'tel:845-608-7516';
    } else {
      this.contactLink = '/contact';
    }
  }
  

  ngAfterViewInit(): void {
    this.muteVideo();
  }

  private muteVideo(): void {
    const heroVideo = document.getElementById('heroVideo') as HTMLVideoElement;
    if (heroVideo) {
      heroVideo.muted = true;
      heroVideo.setAttribute('muted', 'true');
    }
  }
}
