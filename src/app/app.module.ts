import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { IndexComponent } from './index/index.component';
import { ArtistsComponent } from './artists/artists.component';
import { SongsComponent } from './songs/songs.component';
import { AlbumsComponent } from './albums/albums.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'artists', component: ArtistsComponent },
    { path: 'songs', component: SongsComponent},
    { path: 'albums', component: AlbumsComponent},
    { path: '**', component: PageNotFoundComponent }
];
export const routing = RouterModule.forRoot(routes);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContainerComponent,
    IndexComponent,
    ArtistsComponent,
    SongsComponent,
    AlbumsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
