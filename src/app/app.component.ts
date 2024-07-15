import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angularHangMan';
  showHome = true;
  showHowToPlay = false;
  showPickACategory = false;
  showInGame = false;
  currentWord = '';
  specialLetters: string[] = [];
  disabledLetters: string[] = [];

  data:any = {
    movies: [
      "The Shawshank Redemption",
      "The Godfather",
      "The Dark Knight",
      "Pulp Fiction",
      "Forrest Gump"
    ],
    tvShows: [
      "Breaking Bad",
      "Game of Thrones",
      "Friends",
      "The Office",
      "Stranger Things"
    ],
    countries: [
      "United States",
      "Canada",
      "Germany",
      "Australia",
      "Japan"
    ],
    capitalCities: [
      "Washington, D.C.",
      "Ottawa",
      "Berlin",
      "Canberra",
      "Tokyo"
    ],
    animals: [
      "Lion",
      "Elephant",
      "Dolphin",
      "Penguin",
      "Kangaroo"
    ],
    sports: [
      "Soccer",
      "Basketball",
      "Tennis",
      "Cricket",
      "Baseball"
    ]
  };

  constructor() {}

  openHowToPlay() {
    this.showHome = false;
    this.showPickACategory = false;
    this.showInGame = false;
    this.showHowToPlay = true;
  }

  openToPlay() {
    this.showHome = false;
    this.showHowToPlay = false;
    this.showInGame = false;
    this.showPickACategory = true;
  }

  goBackToHome() {
    this.showHowToPlay = false;
    this.showPickACategory = false;
    this.showInGame = false;
    this.showHome = true;
  }

  pickCategoryEvent(category: string) {
    const words = this.data[category];
    this.currentWord = words[Math.floor(Math.random() * words.length)];
    this.specialLetters = this.getSpecialLetters(this.currentWord);
    this.disabledLetters = this.getDisabledLetters(this.currentWord);

    this.showPickACategory = false;
    this.showHome = false;
    this.showHowToPlay = false;
    this.showInGame = true;
  }

  getSpecialLetters(word: string): string[] {
    // Define logic to get special letters based on your game rules
    return Array.from(new Set(word.replace(/\s/g, '').split(''))).slice(0, 5);
  }

  getDisabledLetters(word: string): string[] {
    // Define logic to get disabled letters based on your game rules
    return Array.from(new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').filter(l => !word.includes(l)))).slice(0, 5);
  }
}
