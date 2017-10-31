import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
<<<<<<< HEAD
import {NasaTestComponent} from './nasa-test/nasa-test.component';
import {NasaPictureTestComponent} from './nasa-picture-test/nasa-picture-test.component';
// Import all other components here

const APP_ROUTES: Routes = [
  {path: 'nasa', component: NasaTestComponent},
  {path: '', component: NasaTestComponent},
  {path: 'nasa-pic', component: NasaPictureTestComponent}
=======
import {NasaTestComponent} from "./nasa-test/nasa-test.component";
import {FrontPageComponent} from "./front-page/front-page.component";
// Import all other components here

const APP_ROUTES: Routes = [
  {path: 'searchAsteroids', component: NasaTestComponent},
  {path: '', component: FrontPageComponent},
>>>>>>> jj
  // so on
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
