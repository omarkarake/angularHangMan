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

  data = {
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
    this.showHowToPlay = true;
  }

  openToPlay() {
    this.showHome = false;
    this.showHowToPlay = false;
    this.showPickACategory = true;
  }

  goBackToHome() {
    this.showHome = true;
    this.showHowToPlay = false;
    this.showPickACategory = false; // Fix this line
  }

  pickCategoryEvent(category: string){
    console.log(category);
  }
}
