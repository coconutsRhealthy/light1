import { Component, OnInit } from '@angular/core';
import { MetaService } from '../services/meta.service';

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

  constructor(private meta: MetaService) {
    this.meta.updateTitle("Neem Contact Op met Diski | Kortingscodes en Samenwerkingen");
    this.meta.updateMetaInfo("Duizenden online shoppers maken gebruik van de kortingscodes die Diski deelt. Heb je vragen, verzoeken of ideeën voor samenwerkingen of adverteren? Neem contact op en ontdek hoe we samen kunnen werken via Diski.nl en @wiegeeftkorting.", "diski.nl", "Samenwerken met Diski, Adverteren op kortingscode platform, Kortingscodes voor online shoppers, Samenwerkingen met bedrijven");
  }

  ngOnInit(): void {
  }

}
