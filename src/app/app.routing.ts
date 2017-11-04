import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {NasaTestComponent} from './components/nasa-test/nasa-test.component';
import {NasaPictureTestComponent} from './components/nasa-picture-test/nasa-picture-test.component';

import {FrontPageComponent} from "./components/front-page/front-page.component";
import {NasaPictureDetailsComponent} from './components/nasa-picture-details/nasa-picture-details.component';
import {ApodComponent} from "./components/apod/apod.component";
import {ApodarchiveComponent} from "./components/apodarchive/apodarchive.component";


const APP_ROUTES: Routes = [
  {path: 'searchAsteroids', component: NasaTestComponent},
  {path: '', component: FrontPageComponent},
  {path: 'nasa-pic', component: NasaPictureTestComponent},
  {path: 'APOD', component: ApodComponent},
  {path: 'APOD/Archive', component: ApodarchiveComponent},
  {path: 'nasa-pic/:imgid/details', component: NasaPictureDetailsComponent},
  // so on
];


// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
