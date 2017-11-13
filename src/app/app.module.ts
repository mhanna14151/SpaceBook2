import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {Routing} from './app.routing';
import { NasaTestComponent } from './components/nasa-test/nasa-test.component';
import { NasaPictureTestComponent } from './components/nasa-picture-test/nasa-picture-test.component';
import { NasaPictureDetailsComponent } from './components/nasa-picture-details/nasa-picture-details.component';

import { SpaceBannerDefaultComponent } from './space-banner-default/space-banner-default.component';

import {UserService} from './services/user.service.client';
import {PostService} from './services/post.service.client';
import {NasaServiceClient} from './services/nasa.service.client';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { PublicProfileComponent } from './components/user/public-profile/public-profile.component';

import {ApodComponent} from './components/apod/apod.component';
import {FrontPageComponent} from './components/user/front-page/front-page.component';
import {ApodarchiveComponent} from './components/apodarchive/apodarchive.component';


@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    NasaTestComponent,
    NasaPictureTestComponent,
    FrontPageComponent,
    NasaPictureDetailsComponent,
    ApodComponent,
    ApodarchiveComponent,
    SpaceBannerDefaultComponent,
    RegisterComponent,
    ProfileComponent,
    PublicProfileComponent,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  // Client Side services here
  providers: [NasaServiceClient, UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
