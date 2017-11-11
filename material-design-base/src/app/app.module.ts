import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';

import { AppComponent } from './app.component';
import { SafePipePipe } from './safe-pipe.pipe';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    SafePipePipe
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
     HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
