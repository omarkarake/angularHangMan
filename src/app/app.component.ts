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
      "Forrest Gump",
      "Inception",
      "Fight Club",
      "The Matrix",
      "Goodfellas",
      "The Empire Strikes Back",
      "Interstellar",
      "The Green Mile",
      "Gladiator",
      "Saving Private Ryan",
      "Braveheart",
      "Titanic",
      "The Lion King",
      "Jurassic Park",
      "The Departed",
      "Back to the Future"
    ],
    tvShows: [
      "Breaking Bad",
      "Game of Thrones",
      "Friends",
      "The Office",
      "Stranger Things",
      "The Simpsons",
      "Sherlock",
      "The Big Bang Theory",
      "True Detective",
      "House of Cards",
      "Dexter",
      "The Crown",
      "Westworld",
      "Narcos",
      "The Mandalorian",
      "Better Call Saul",
      "Rick and Morty",
      "Fargo",
      "Black Mirror",
      "Mad Men"
    ],
    countries: [
      "United States",
      "Canada",
      "Germany",
      "Australia",
      "Japan",
      "France",
      "Italy",
      "Brazil",
      "India",
      "China",
      "Russia",
      "United Kingdom",
      "Mexico",
      "South Korea",
      "Spain",
      "Netherlands",
      "Switzerland",
      "Sweden",
      "Norway",
      "South Africa"
    ],
    capitalCities: [
      "Washington, D.C.",
      "Ottawa",
      "Berlin",
      "Canberra",
      "Tokyo",
      "Paris",
      "Rome",
      "Brasília",
      "New Delhi",
      "Beijing",
      "Moscow",
      "London",
      "Mexico City",
      "Seoul",
      "Madrid",
      "Amsterdam",
      "Bern",
      "Stockholm",
      "Oslo",
      "Pretoria"
    ],
    animals: [
      "Lion",
      "Elephant",
      "Dolphin",
      "Penguin",
      "Kangaroo",
      "Tiger",
      "Giraffe",
      "Panda",
      "Bear",
      "Wolf",
      "Eagle",
      "Shark",
      "Whale",
      "Cheetah",
      "Gorilla",
      "Zebra",
      "Koala",
      "Chimpanzee",
      "Rhinoceros",
      "Hippopotamus"
    ],
    sports: [
      "Soccer",
      "Basketball",
      "Tennis",
      "Cricket",
      "Baseball",
      "American Football",
      "Rugby",
      "Hockey",
      "Golf",
      "Boxing",
      "MMA",
      "Swimming",
      "Track and Field",
      "Cycling",
      "Skiing",
      "Skateboarding",
      "Surfing",
      "Volleyball",
      "Table Tennis",
      "Badminton"
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
