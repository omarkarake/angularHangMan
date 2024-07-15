import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.css']
})
export class InGameComponent implements OnInit {
  @Input() word: string = '';
  @Input() specialLetters: string[] = [];
  disabledLetters: string[] = [];
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  ngOnInit(): void {
    console.log(this.word, this.disabledLetters);
    
  }
  isSpecialLetter(letter: string): boolean {
    return this.specialLetters.includes(letter);
  }

  isDisabledLetter(letter: string): boolean {
    return this.disabledLetters.includes(letter);
  }
  
  isTheLetterIncludeInString(letter: string){
    // this.disabledLetters.push(letter);
    // return this.word.toLowerCase().includes(letter.toLowerCase());
    if(!this.word.toLowerCase().includes(letter.toLowerCase())){
      this.disabledLetters.push(letter)
      console.log(this.disabledLetters);
    }
  }
}
