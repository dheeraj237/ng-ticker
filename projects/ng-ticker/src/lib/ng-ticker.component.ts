import { Component, OnInit, ViewEncapsulation, ElementRef, Renderer2, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'ng-ticker',
  templateUrl: './ng-ticker.component.html',
  styleUrls: ['./ng-ticker.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})

export class NgTickerComponent implements OnInit {

  @ViewChild('content', { static: true }) contentRef: ElementRef;

  /**
   * Defines direction of ticker content. [left, right, alternate]
   * type: string
   */
  @Input() direction = 'left';
  /**
   * Defines speed of ticker content. [time in seconds, miliseconds]
   * type: time in string
   */
  @Input() speed = '10s';
  /**
   * Add steps to complete animation in direction [steps]
   * type: number
   */
  @Input() steps: string;
  /**
   * Defines whether ticker stop on hover. [true, false]
   * type: boolean
   */
  @Input() stopOnHover = false;
  /**
   * Set ticker animation transition play state [true, false]
   * type: boolean 
   */
  @Input() playState = true;

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
