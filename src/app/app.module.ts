import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';  // <-- Import FormsModule

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), FormsModule],  // <-- Add FormsModule here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
