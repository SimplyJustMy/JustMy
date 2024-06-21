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
  mobileMenuActive = false;

  constructor(private router: Router) {}

  closeMenu() {
    this.mobileMenuActive = false;
}

  toggleMobileMenu() {
    console.log("here");
    this.mobileMenuActive = !this.mobileMenuActive;
  }
}
