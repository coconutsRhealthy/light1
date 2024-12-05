import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./../app.component.css']
})
export class ContactComponent implements OnInit {

  isMenuCollapsed = true;

  flameEmoji = "\u{1F525}";
  influencerEmoji = "\u{1F4F7}";
  companyEmoji = "\u{1F3E2}";
  eyesEmoji = "\u{1F440}";

  constructor() {

  }

  ngOnInit(): void {
  }

}
