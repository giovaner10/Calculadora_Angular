import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculadoraModule } from './calculadora';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    CalculadoraModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
