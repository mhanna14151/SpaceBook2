import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {NasaTestComponent} from './nasa-test/nasa-test.component';
import {NasaPictureTestComponent} from './nasa-picture-test/nasa-picture-test.component';
import {FrontPageComponent} from "./front-page/front-page.component";


const APP_ROUTES: Routes = [
  {path: 'searchAsteroids', component: NasaTestComponent},
  {path: '', component: FrontPageComponent},
  {path: 'nasa-pic', component: NasaPictureTestComponent},
  ]



// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
