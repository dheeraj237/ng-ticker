import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ng-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: [ './ticker.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TickerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
