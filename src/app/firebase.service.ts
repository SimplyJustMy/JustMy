import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  sendEmail(emailData: FormData) {
    const functionUrl = 'http://localhost:3000/send-email';
    //const functionUrl = 'https://twg-template-submission-92b1532f00c1.herokuapp.com/send-email';
    return this.http.post(functionUrl, emailData);
  }
  
  // sendConfirmationEmail(userEmail: string) {
  //   const functionUrl = 'https://us-central1-the-website-guys-inquiry.cloudfunctions.net/sendConfirmationEmail';
  //   return this.http.post(functionUrl, { email: userEmail });
  // }

}
