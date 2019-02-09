import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { TestComponent } from "./items/test-component";
import { TestComponent2 } from "./items/test-component2";
import { MediaItemListComponent } from "./list/media-item-list.component";
import { FavDirective } from "./modifiers/favourite.directive";
import { CustomChange } from "./modifiers/custom-pipe";
import { HelpComponent } from "./help/help-component";
import { TemplateForm } from "./forms/new-form";
import { ModelForm } from "./forms/model-form";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TestComponent2,
    MediaItemListComponent,
    FavDirective,
    CustomChange,
    HelpComponent,
    TemplateForm,
    ModelForm
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
