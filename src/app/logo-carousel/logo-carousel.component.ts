
import { Component } from '@angular/core';

@Component({
  selector: 'app-logo-carousel',
  templateUrl: './logo-carousel.component.html',
  styleUrl: './logo-carousel.component.scss'
})
export class LogoCarouselComponent {
  carouselOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2000, // Adjust the speed of the slide transition here
    autoplayHoverPause: true,
    slideTransition: 'linear', // Ensures smooth transition
    smartSpeed: 1000, // Adjust the speed of the transition animation
    responsive: {
      0: {
        items: 3 // Number of logos shown at once
      },
      600: {
        items: 5
      },
      1000: {
        items: 7
      }
    }
  };

  logos = [
    'assets/ltdhype-logo2.png',
    'assets/pcrdna-LOGO.png',
    'assets/amores-logo2.png',
    'assets/ldl-logo2.png',
    'assets/rye.logo2.png',
    'assets/tsstage-logo.webp',
    'assets/assetace-logo.png',
    'assets/kings-logo.png',
    'assets/reyes-logo.png',
    'assets/annies-logo.avif'
  ];
}
