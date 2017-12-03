import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {NasaTestComponent} from './components/nasa-test/nasa-test.component';
import {NasaPictureTestComponent} from './components/nasa-picture-test/nasa-picture-test.component';

import {FrontPageComponent} from './components/user/front-page/front-page.component';
import {NasaPictureDetailsComponent} from './components/nasa-picture-details/nasa-picture-details.component';
import {ApodComponent} from './components/apod/apod.component';
import {ApodarchiveComponent} from './components/apodarchive/apodarchive.component';
import {RegisterComponent} from './components/user/register/register.component';
import {ProfileComponent} from './components/user/profile/profile.component';
import {PostComponent} from './components/post/post.component';
import {PostListComponent} from './components/post-list/post-list.component';
import {PublicProfileComponent} from './components/user/public-profile/public-profile.component';
import {CreatePostComponent} from './components/create-post/create-post.component';
import {SearchComponent} from './components/search/search.component';
import {CelestialBodyComponent} from "./components/celestial-body/celestial-body.component";
import {UserAlbumComponent} from "./components/album/user-album/user-album.component";
import {AlbumNewComponent} from "./components/album/album-new/album-new.component";
import {PictureNewComponent} from "./components/picture/picture-new/picture-new.component";
import {UserPicturesComponent} from "./components/picture/user-pictures/user-pictures.component";


const APP_ROUTES: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'user/:uid', component: PublicProfileComponent},
  {path: 'user/:uid/edit', component: ProfileComponent},
  {path: 'searchAsteroids', component: NasaTestComponent},
  {path: '', component: FrontPageComponent},
  {path: 'login', component: FrontPageComponent},
  {path: 'nasa-pic', component: NasaPictureTestComponent},
  {path: 'user/:uid/search', component: SearchComponent},
  {path: 'APOD', component: ApodComponent},
  {path: 'APOD/Archive', component: ApodarchiveComponent},
  {path: 'nasa-pic/:imgid/details', component: NasaPictureDetailsComponent},
  {path: 'testPostComponent', component: PostComponent}, // these paths are temporary, will likely be renamed
  {path: 'testListComponent', component: PostListComponent}, // these paths are temporary, will likely be renamed.
  {path: 'cb/:cbid', component: CelestialBodyComponent},
  {path: 'user/:uid/posts/new', component: CreatePostComponent},
  {path: 'user/:uid/album/new', component: AlbumNewComponent},
  {path: 'user/:uid/album/:aid', component: UserAlbumComponent},
  {path: 'user/:uid/album/:aid/pic/new', component: PictureNewComponent},
  {path: 'user/:uid/album/:aid/pic/:picid', component: UserPicturesComponent}
  // so on
];


// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
