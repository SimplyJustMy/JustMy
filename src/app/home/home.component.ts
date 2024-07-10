import { Component, HostListener } from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  contactForm!: FormGroup;

  submitted: boolean = false;

  services = [
    { name: 'Website Development', ourDescription: 'Crafting bespoke websites that elevate local businesses, providing a digital platform that combines functionality, visual appeal, and a tailored approach to effectively showcase your unique brand to the world.', description: 'Programming tailor-made, functional, and visually appealing online platforms to effectively represent and grow your business in the digital world.', image: '../assets/AVIF/web-dev.avif', width: 300, showcaseWidth: 650, selectionWidth: 400 },
    { name: 'UI/UX Design', ourDescription: 'Focused on creating engaging and intuitive user experiences, ensuring your website not only looks great but also delivers a seamless and user-friendly journey, perfectly resonating with the local community and your business clientele.', description: 'Crafting user-friendly and aesthetically pleasing website interfaces that enhance customer engagement and drive business success.', image: '../assets/AVIF/ui-ux.avif', width: 350, showcaseWidth: 700, selectionWidth: 350 },
    { name: 'E-Commerce Solutions', ourDescription: "Providing comprehensive E-commerce solutions tailored to local businesses, enabling you to effortlessly sell online with a secure, user-friendly platform that's designed to boost sales and enhance your customers' shopping experience.", description: 'Provide streamlined, secure, and customizable online platforms to expand market reach and boost sales efficiently.', image: '../assets/AVIF/e-commerce.avif', width: 325, showcaseWidth: 700, selectionWidth: 350 },
    { name: 'Mobile Applications', ourDescription: 'Bringing your business into the hands of customers wherever they go, creating custom, engaging, and user-friendly apps that enhance your local presence and connect you directly with your audience.', description: 'Developing user-centric, responsive, and feature-rich apps to enhance customer interaction and business mobility.', image: '../assets/AVIF/mobile-app.avif', width: 300, showcaseWidth: 650, selectionWidth: 400 },
    { name: 'POS System Setup', ourDescription: 'Managing all aspects of communication, delivery, setup, and configuration with leading POS providers, ensuring a seamless integration tailored to your specific business needs.', description: 'Implementing user-friendly, efficient, and integrated point-of-sale solutions to streamline transactions and inventory management.', image: '../assets/AVIF/pos.avif', width: 300, showcaseWidth: 650, selectionWidth: 400 }
  ];

  websitePackages = [
    { name: 'E-Commerce', price: '2,000', note1: 'Customized Storefront', note2: 'Secure Shopping Experience', note3: 'Optimized for desktop/tablet/mobile'},
    { name: 'Standard', price: '1,000', note1: 'Customized & Professional Design', note2: 'SEO Optimized', note3: 'High Speed & Reliable'},
    { name: 'Renovation', price: '800', note1: 'Modernized User Experience', note2: 'Content Update', note3: 'Optimized Performance'}
  ]

  otherPackages = [
    { name: 'Mobile App', price: '-', note1: 'Cross Platform Compatibility', note2: 'Customized User Interface', note3: 'Secure User Experience'},
    { name: 'Everything', price: '-', note1: 'Website', note2: 'Online Services(Ordering, Delivery, Booking)', note3: 'POS System Setup(Location will adjust price)'}
  ]

  selectedService = this.services[0];



  constructor(private fb: FormBuilder, private firebaseService: FirebaseService) {}


  isMobile: boolean = window.innerWidth <= 768;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth <= 768;
  }

  selectService(service: {name: string, ourDescription: string, description: string, image: string, width: number, showcaseWidth: number, selectionWidth: number}) {
    this.selectedService = service;
  }

  toggleAccordion(index: number) {
    const service = this.services[index];
    if (this.selectedService === service) {
      
    } else {
      this.selectedService = service;
    }
  }

  handleClick(event: any){
    event.stopPropogation();
  }


  projects = [
    {
      name: 'Limited Hype',
      image: 'assets/AVIF/ltd-desktop.avif',
      image2: 'assets/AVIF/ltd-mobile.avif',
      story: 'Short story about the Meraki project...',
      showDetails: true
    },
    {
      name: 'Let Em\' Eat Cake',
      image: 'assets/AVIF/cake-desktop.avif',
      image2: 'assets/AVIF/cake-mobile.avif',
      story: 'Short story about the Meraki project...',
      showDetails: true
    },
    {
      name: 'Rye Auto Boat Detailing',
      image: 'assets/AVIF/rye-desktop.avif',
      image2: 'assets/AVIF/rye-mobile.avif',
      story: 'Short story about the Meraki project...',
      showDetails: true
    },
    {
      name: 'Annies Petsitting',
      image: 'assets/AVIF/annies-petsitting-desktop.avif',
      image2: 'assets/AVIF/annies-petsitting-mobile.avif',
      story: 'Short story about the Michelle Hay Management project...',
      showDetails: false
    },
    {
      name: 'Lighting Distributors LLC',
      image: 'assets/AVIF/ld_still.avif',
      image2: 'assets/AVIF/ld_mobile.avif',
      story: 'Short story about The Booking Project...',
      showDetails: false
    },
    {
      name: 'Fiesta Bowl',
      image: 'assets/AVIF/fiesta.avif',
      image2: 'assets/AVIF/fiesta_mobile.avif',
      story: 'Short story about The Booking Project...',
      showDetails: false
    },
    {
      name: 'PCR DNA Testing',
      image: 'assets/AVIF/pcr.avif',
      image2: 'assets/AVIF/pcr_mobile.avif',
      story: 'Short story about The Booking Project...',
      showDetails: false
    },
  ];

  showDetails(project: any) {
    this.projects.forEach(p => p.showDetails = false);
    project.showDetails = true;
  }

  hideDetails(project: any) {
    project.showDetails = false;
  }

}
