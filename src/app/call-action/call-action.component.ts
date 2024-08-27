import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-call-action',
  templateUrl: './call-action.component.html',
  styleUrls: ['./call-action.component.scss']
})
export class CallActionComponent {
  contactForm: FormGroup;

  successMessage: string = ''; // Variable to hold the success message
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private contactFormService: FirebaseService) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      business: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.submitted = true; 
      const formData = new FormData();
      formData.append('name', this.contactForm.get('name')?.value);
      formData.append('business', this.contactForm.get('business')?.value);
      formData.append('phone', this.contactForm.get('phone')?.value);
      formData.append('email', this.contactForm.get('email')?.value);

      this.contactFormService.sendFormData(formData).subscribe(
        response => {
          console.log('Form submitted successfully', response);
          this.successMessage = 'Your submission has been sent!';
          this.submitted = false;
        },
        error => {
          console.error('Error submitting form', error);
          this.submitted = false;
        }
      );
    }
  }
}
