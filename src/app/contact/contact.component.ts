import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  
  contactForm!: FormGroup;

  submitted: boolean = false;
  
  name: string = '';
  email: string = '';
  message: string = '';


  constructor(private fb: FormBuilder, private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      proposal: ['', Validators.required]
    });
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
}
