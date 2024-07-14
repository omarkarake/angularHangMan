import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-how-to-play',
  templateUrl: './how-to-play.component.html',
  styleUrl: './how-to-play.component.css',
})
export class HowToPlayComponent implements OnInit {
  @Output() goBack = new EventEmitter();
  @Input('pageType') pageType: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  backToHome() {
    this.goBack.emit();
  }
}
