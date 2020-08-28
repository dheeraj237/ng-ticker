import { Component, OnInit, ViewEncapsulation, ElementRef, Renderer2, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'ng-ticker',
  templateUrl: './ng-ticker.component.html',
  styleUrls: ['./ng-ticker.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class NgTickerComponent implements OnInit {

  @ViewChild('content', { static: true }) contentRef: ElementRef;

  @Input() direction = 'left';

  @Input() speed = '10s';

  @Input() steps: string;

  directions = {
    left: 'normal',
    right: 'reverse',
    alternate: 'alternate',
    // up: 'up', TODO:
    // down: 'down'
  };

  constructor(
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    //  animation-direction
    this.renderer.setStyle(this.contentRef.nativeElement, 'animation-direction', this.directions[this.direction]);
    this.renderer.setStyle(this.contentRef.nativeElement, 'animation-duration', this.speed);
    this.steps
      ? this.renderer.setStyle(this.contentRef.nativeElement, 'animation-timing-function', `steps(${this.steps}, jump-both)`)
      : this.renderer.setStyle(this.contentRef.nativeElement, 'animation-timing-function', 'linear');
  }

}
