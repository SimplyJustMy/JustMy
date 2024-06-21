import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  
  contactForm!: FormGroup;

  submitted: boolean = false;
  
  // name: string = '';
  // email: string = '';
  // message: string = '';

  // name: string = '';
  // email: string = '';
  // phone: string = '';
  // comment: string = '';

  constructor(private fb: FormBuilder, private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      proposal: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    const heroVideo = document.getElementById('heroVideo') as HTMLVideoElement;
    if (heroVideo) {
      heroVideo.muted = true;
      heroVideo.setAttribute('muted', 'true'); // Ensures attribute is set
    }
  }
  
  sendEmail() {
    this.submitted = !this.submitted;

    this.firebaseService.sendEmail(this.contactForm.value).subscribe(
      response => {
        console.log('Email sent successfully!', response);
      },
      error => {
        console.error('Error sending email:', error);
      }
    );
    
  }

  onSubmit() {
    // const formData = {
    //   name: this.name,
    //   email: this.email,
    //   phone: this.phone,
    //   comment: this.comment
    // };

    // // this.http.post('http://localhost:3000/send-email', formData)
    // //   .subscribe(response => {
    // //     console.log('Email sent successfully', response);
    // //   }, error => {
    // //     console.error('Error sending email', error);
    // //   });

    //   this.http.post('https://limited-hype-server-fc852c1e4c1b.herokuapp.com/send-email', formData)
    //   .subscribe(response => {
    //     console.log('Email sent successfully', response);
    //   }, error => {
    //     console.error('Error sending email', error);
    //   });
  }
}
