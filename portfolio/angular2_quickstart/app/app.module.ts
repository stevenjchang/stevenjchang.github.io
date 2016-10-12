import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { StocksComponent } from './stocks.component';
import { HighlightDirective } from './highlight.directive';
import { StockService } from './stock.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ 
  	AppComponent, StocksComponent, HighlightDirective 
  ],
  providers: [ StockService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
