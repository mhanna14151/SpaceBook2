import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Routing} from './app.routing';
import { NasaTestComponent } from './nasa-test/nasa-test.component';
import {NasaServiceClient} from './services/nasa.service.client';
import { NasaPictureTestComponent } from './nasa-picture-test/nasa-picture-test.component';

import { FrontPageComponent } from './front-page/front-page.component';


@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    NasaTestComponent,
    NasaPictureTestComponent,
    FrontPageComponent,
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
