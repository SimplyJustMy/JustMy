import { Component } from '@angular/core';

interface TeamMember {
  name: string;
  image: string;
  description: string;
  showDetails: boolean;
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {


  ngAfterViewInit(): void {
    const heroVideo = document.getElementById('heroVideo') as HTMLVideoElement;
    if (heroVideo) {
      heroVideo.muted = true;
      heroVideo.setAttribute('muted', 'true'); // Ensures attribute is set
    }
  }

  teamRows: TeamMember[][] = [];

  teamMembers: TeamMember[] = [
    {
      name: 'Jared',
      image: 'assets/jared-cow.jpg',
      description: 'Having always been inspired by my fathers ownership of 2 local pizzerias, I decided to leverage my experience in the software industry to create my own business. I built a team dedicated to helping local businesses in our communities thrive online with outstanding websites.',
      showDetails: false
    },
    {
      name: 'Matthew',
      image: 'assets/matt-new.jpg',
      description: 'My diverse customer service roles in restaurants, hotels, valet services, and small businesses have fueled my passion for fostering genuine connections. With expertise in finance, sales, and effective communication strategies, I am dedicated to building strong relationships within my community.',
      showDetails: false
    },
    {
      name: 'Patrick',
      image: 'assets/pat-helens.jpg',
      description: 'Inspired by my family\'s strong work ethic in the electrical trade, I have channeled these values into a successful software development career. My dedication and industrious nature are reflected in the meticulousness of my work.',
      showDetails: false
    },
    {
      name: 'Luke',
      image: 'assets/luke-boarding.jpg',
      description: 'I am equipped with certifications across Google Analytics, Ads, Twitter, LinkedIn, and beyond. My proficiency in Marketing, SEO, Google Ads, Content Creation, and other areas is deeply influenced by my family\'s long-standing governmental history dedicated to community services. I am driven to assist small and local businesses in navigating and maximizing their digital landscape, ensuring they thrive in an increasingly digital world.',
      showDetails: false
    },
    {
      name: 'Michael',
      image: 'assets/mike-fly.jpg',
      description: 'Through diverse customer service roles in restaurants and small businesses, I am deeply committed to cultivating robust and enduring professional relationships, thereby enhancing the overall experience for the clients I assist.',
      showDetails: false
    },
    {
      name: 'Hunter',
      image: 'assets/AVIF/hunter_portrait.avif',
      description: 'I possess expertise in marketing and business relationships. I never let the fear of striking out keep me from playing the game and am proof that well done is better than well said.',
      showDetails: false
    },
    {
      name: 'Jordan',
      image: 'assets/AVIF/Jordan-Pic.avif',
      description: 'I have a passion for making a difference in the world and am inspired by gratitude. I strive to be genuine and true to myself, believing that all businesses deserve this!',
      showDetails: false
    },
    // Add more team members as needed
  ];

  constructor() {
    this.splitIntoRows();
  }

  splitIntoRows() {
    const rowCount = Math.ceil(this.teamMembers.length / 2);
    for (let i = 0; i < rowCount; i++) {
      this.teamRows.push(this.teamMembers.slice(i * 2, i * 2 + 2));
    }
  }

  showDetails(member: any) {
    member.showDetails = true;
  }

  hideDetails(member: any) {
    member.showDetails = false;
  }
}
