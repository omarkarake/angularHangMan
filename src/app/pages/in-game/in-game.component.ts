import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-in-game',
  templateUrl: './in-game.component.html',
  styleUrls: ['./in-game.component.css'],
})
export class InGameComponent implements OnInit {
  @Input() word: string = '';
  @Input() specialLetters: string[] = [];
  disabledLetters: string[] = [];
  alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  indexOfSpecialLetter: number | undefined;
  losedLetter: string[] = [];
  ngOnInit(): void {
    console.log("initial word and disabled letter", this.word, this.disabledLetters);
    console.log("initial word and special letters",this.word, this.specialLetters);
  }
  isSpecialLetter(letter: string): boolean {
    return this.specialLetters.includes(letter);
  }

  isDisabledLetter(letter: string): boolean {
    return this.disabledLetters.includes(letter);
  }

  isTheLetterIncludeInString(letter: string) {
    // this.disabledLetters.push(letter);
    // return this.word.toLowerCase().includes(letter.toLowerCase());
    if (!this.word.toLowerCase().includes(letter.toLowerCase())) {
      this.disabledLetters.push(letter);
      console.log(letter);
      this.losedLetter.push(letter);
      console.log('word', this.word);
      console.log('special letter if not in the words', this.specialLetters);
      console.log('losed letters length: ', this.losedLetter.length);
      
    }else{
      console.log(letter);
      console.log('word: ', this.word);
      console.log('special letter: ', this.specialLetters);
      console.log('do we have this letter in this array: ', this.specialLetters.includes(letter));
      if (this.specialLetters.includes(letter)) {
        this.indexOfSpecialLetter = this.specialLetters.indexOf(letter);
        console.log('special letter index: ', this.indexOfSpecialLetter);
        this.specialLetters.splice(this.indexOfSpecialLetter, 1);
        console.log('special letter after deleting index: ', this.specialLetters);
        console.log('losed letters length: ', this.losedLetter.length);
      }else{
        this.losedLetter.push(letter);
        this.disabledLetters.push(letter);
        console.log('disabled letters: ', this.disabledLetters);
        console.log('losed letters length: ', this.losedLetter.length);
      }
    }
  }
}
