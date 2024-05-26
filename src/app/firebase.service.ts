import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private http: HttpClient) { }

  sendEmail(emailData: { name: string; email: string; phone: string; proposal: string }) {
    const functionUrl = 'https://us-central1-the-website-guys-inquiry.cloudfunctions.net/sendEmail'; // Update this URL with your actual Cloud Function URL
  
    const body = {
      "data": {
        "name": emailData.name,
        "email": emailData.email,
        "phone": emailData.phone,
        "proposal": emailData.proposal
      }
    };
    return this.http.post(functionUrl, body);
  }
  


  

}
