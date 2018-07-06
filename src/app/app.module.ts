import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomTopAppBarComponent } from './custom-top-app-bar/custom-top-app-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTopAppBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
