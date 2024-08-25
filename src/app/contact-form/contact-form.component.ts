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
  dragOver: boolean = false;
  uploadedFiles: File[] = [];  // Array to hold the uploaded files
  successMessage: string = ''; // Variable to hold the success message

  constructor(private fb: FormBuilder, private firebaseService: FirebaseService) {}

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      serviceType: ['', Validators.required],  // Updated to match the form template
      proposal: ['', Validators.required],
      images: [null]
    });
  }

  triggerFileInput(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  onImagesChange(event: any) {
    const files = event.target.files;
    if (files.length > 0) {
      this.uploadedFiles = Array.from(files); 
      this.contactForm.patchValue({
        images: this.uploadedFiles 
      });
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragOver = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.dragOver = false;
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.dragOver = false;
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.uploadedFiles = Array.from(files);  // Store files in the uploadedFiles array
      this.contactForm.patchValue({
        images: this.uploadedFiles  // Adding all files to the images array
      });
    }
  }

  sendEmail() {
    this.submitted = true; // Set to true to show the spinner and disable the button

    const formData = new FormData();
    formData.append('name', this.contactForm.get('name')?.value);
    formData.append('email', this.contactForm.get('email')?.value);
    formData.append('phone', this.contactForm.get('phone')?.value);
    formData.append('serviceType', this.contactForm.get('serviceType')?.value);
    formData.append('proposal', this.contactForm.get('proposal')?.value);

    const files: File[] = this.contactForm.get('images')?.value;
    if (files) {
        for (let i = 0; i < files.length; i++) {
            formData.append('images[]', files[i]);
        }
    }

    this.firebaseService.sendEmail(formData).subscribe(
        response => {
            console.log('Email sent successfully!', response);
            this.successMessage = 'Your website template request has been submitted successfully!';
            this.submitted = false; // Reset the submitted flag
        },
        error => {
            console.error('Error sending email:', error);
            this.submitted = false; // Reset the submitted flag even if there's an error
        }
    );
}

}
