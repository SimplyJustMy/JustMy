import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = 'just-my';
  showPhoneNumber: boolean = false;

  constructor(private router: Router) {}

  // Handle the click event on the "Call +1 845-596-0635" link
  callPhoneNumber(): void {
    // You can add code here to initiate the phone call using a telephony API or other method.
    // Note: Initiating a phone call directly from a webpage might not work in all browsers.

    // For demonstration purposes, you can log a message to the console.
    console.log('Initiating a phone call...');
  }

  goToAbout() {
    this.router.navigate(['/about-us']);
  }
}
