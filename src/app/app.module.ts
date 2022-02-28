import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HighlightService } from './services/highlight.service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  providers:    [ HighlightService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
