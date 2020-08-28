import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMenuComponent } from './top-menu.component';

describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;
  let componentHtml: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopMenuComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    componentHtml = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have title 🌈 NG-TICKER DEMO 🚀', () => {
    expect(componentHtml.getElementsByClassName('app-title')[0].textContent).toEqual('🌈 NG-TICKER DEMO 🚀');
  });
});
