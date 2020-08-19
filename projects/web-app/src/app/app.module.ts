import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TickerModule } from 'ticker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TickerModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
