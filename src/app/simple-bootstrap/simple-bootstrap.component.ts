import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-bootstrap', // Selector used in app.component.html
  templateUrl: './simple-bootstrap.component.html', // Path to the HTML file
  styleUrls: ['./simple-bootstrap.component.css'] // Path to the CSS file
})
export class SimpleBootstrapComponent {
  // This is where you can define properties and methods for the component
  constructor() {}

  // Example method to handle button clicks
  onButtonClick(): void {
    alert('Button clicked!');
  }
}
