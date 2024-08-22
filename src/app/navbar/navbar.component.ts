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
  public contactLink!: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setContactLink();
  }

  closeMenu() {
    this.mobileMenuActive = false;
  }

  toggleMobileMenu() {
    console.log("here");
    this.mobileMenuActive = !this.mobileMenuActive;
  }

  setContactLink() {
    if (window.innerWidth <= 525) {
      this.contactLink = 'tel:845-608-7516';
    } else {
      this.contactLink = '/contact';
    }
  }
  
}
