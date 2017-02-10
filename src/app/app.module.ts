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

import { DatosEstaticosService } from './datos-estaticos.service';
import { AlbumsContainerComponent } from './albums-container/albums-container.component';

const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'index', component: IndexComponent },
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
    PageNotFoundComponent,
    AlbumsContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ DatosEstaticosService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
