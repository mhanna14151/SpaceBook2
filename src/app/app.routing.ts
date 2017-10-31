import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {NasaTestComponent} from "./nasa-test/nasa-test.component";
import {FrontPageComponent} from "./front-page/front-page.component";
// Import all other components here

const APP_ROUTES: Routes = [
  {path: 'nasa', component: NasaTestComponent},
  {path: '', component: FrontPageComponent},
  // so on
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
