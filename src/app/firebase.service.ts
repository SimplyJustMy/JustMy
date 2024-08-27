import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  //private functionUrl = 'http://localhost:3000';
  private functionUrl = 'https://twg-template-submission-92b1532f00c1.herokuapp.com';

  constructor(private http: HttpClient) { }

  sendEmail(emailData: FormData) {
    return this.http.post(this.functionUrl + '/send-email', emailData);
  }
  
  sendFormData(formData: FormData): Observable<any> {
    return this.http.post(this.functionUrl + '/send-contact-form', formData);
  }
}
