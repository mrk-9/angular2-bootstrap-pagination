import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PaginationDirective} from '../directives/pagination.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [AppComponent, PaginationDirective],
  bootstrap:    [ AppComponent ]
})
export class PaginationModule { }