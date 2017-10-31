import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Routing} from './app.routing';
import { NasaTestComponent } from './nasa-test/nasa-test.component';
import {NasaServiceClient} from './services/nasa.service.client';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    NasaTestComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [NasaServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
