import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'just-my';
  showPhoneNumber: boolean = false;

  // Handle the click event on the "Call +1 845-596-0635" link
  callPhoneNumber(): void {
    // You can add code here to initiate the phone call using a telephony API or other method.
    // Note: Initiating a phone call directly from a webpage might not work in all browsers.

    // For demonstration purposes, you can log a message to the console.
    console.log('Initiating a phone call...');
  }
}
