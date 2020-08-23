import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTickerComponent } from './ng-ticker.component';

describe('TickerComponent', () => {
  let component: NgTickerComponent;
  let fixture: ComponentFixture<NgTickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgTickerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
