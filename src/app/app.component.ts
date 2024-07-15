// src/app/app.component.ts
import { Component } from '@angular/core';
import { GameStateService } from './services/game-state.service';

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

  data: any = {
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
  selectedCategory: string = '';

  constructor(private gameStateService: GameStateService) {
    this.transformDataToUpperCase();
  }

  transformDataToUpperCase() {
    for (let category in this.data) {
      if (this.data.hasOwnProperty(category)) {
        this.data[category] = this.data[category].map((item: string) => item.toUpperCase());
      }
    }
  }

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
    this.disabledLetters = [];

    this.showPickACategory = false;
    this.showHome = false;
    this.showHowToPlay = false;
    this.showInGame = true;
  }

  getSpecialLetters(word: string): string[] {
    const uniqueLetters = Array.from(new Set(word.replace(/\s/g, '').split('')));
    let specialLettersCount = 0;

    if (uniqueLetters.length > 8) {
      specialLettersCount = Math.min(6, uniqueLetters.length);
    } else {
      specialLettersCount = Math.ceil(uniqueLetters.length * 0.5);
    }

    return uniqueLetters.slice(0, specialLettersCount);
  }

  categoryPicked(category: string){
    console.log("category selected is: ", category);
    this.selectedCategory = category;
  }

  handlePlayAgainEvent() {
    this.gameStateService.resetGameState();
    console.log("play again clicked in app component");
    this.pickCategoryEvent(this.selectedCategory); // you can modify to randomly pick a category or based on previous selection
  }

  newCategory(){
    this.openToPlay();
    console.log('new category clicked in app component');
  }

  quitGameToHome(){
    console.log("quit game on app component");
    this.goBackToHome();
  }
}
