import { NgModule } from '@angular/core';
import { NgTickerComponent } from './ng-ticker.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgTickerComponent],
  imports: [
    CommonModule
  ],
  exports: [NgTickerComponent]
})
export class NgTickerModule { }
