import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from "./custom/test-component";
import { TestComponent2 } from "./custom/test-component2";
import {MediaItemListComponent} from "./custom/media-item-list.component";
import {FavDirective} from "./custom/favourite.directive";
import {CustomChange} from "./custom/custom-pipe";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestComponent2,
    MediaItemListComponent,
    FavDirective,
    CustomChange
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
