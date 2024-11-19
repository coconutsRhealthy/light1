import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winkels',
  templateUrl: './winkels.component.html',
  styleUrls: ['./winkels.component.css', './../app.component.css']
})
export class WinkelsComponent implements OnInit {

  groupedWinkels: { letter: string, winkels: string[] }[];

  isMenuCollapsed = true;

  constructor() {
    var combinedWinkels = []; //logic to get unique webshops from data
    var winkels = this.removePartsInBracketsAndDoubleEntries(combinedWinkels);
    this.groupedWinkels = this.groupWinkelsByLetter(winkels);
  }

  ngOnInit(): void {

  }

  groupWinkelsByLetter(winkels: string[]): { letter: string, winkels: string[] }[] {
    const groupedWinkels: { letter: string, winkels: string[] }[] = [];

    winkels.sort((a, b) => a.localeCompare(b));

    winkels.forEach((winkel) => {
      const firstLetter = winkel.charAt(0).toUpperCase();
      const group = groupedWinkels.find((g) => g.letter === firstLetter);

      if (group) {
        group.winkels.push(winkel);
      } else {
        groupedWinkels.push({ letter: firstLetter, winkels: [winkel] });
      }
    });

    return groupedWinkels;
  }

  removePartsInBracketsAndDoubleEntries(combinedWinkels) {
    const seen = new Set<string>();
    return combinedWinkels.map(shop => {
        const index = shop.indexOf(" (");
        return index !== -1 ? shop.substring(0, index) : shop;
    })
    .filter(shop => {
        if (seen.has(shop)) {
            return false;
        } else {
            seen.add(shop);
            return true;
        }
    });
  }
}
