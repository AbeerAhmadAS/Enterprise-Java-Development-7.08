import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PageComponent } from './components/character/page/page.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { CharacterPageComponent } from './components/character-page/character-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    CharacterItemComponent,
    CharacterPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
