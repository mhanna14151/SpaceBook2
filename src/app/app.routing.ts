import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {NasaTestComponent} from './nasa-test/nasa-test.component';
import {NasaPictureTestComponent} from './nasa-picture-test/nasa-picture-test.component';
// Import all other components here

const APP_ROUTES: Routes = [
  {path: 'nasa', component: NasaTestComponent},
  {path: '', component: NasaTestComponent},
  {path: 'nasa-pic', component: NasaPictureTestComponent}
  // so on
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
