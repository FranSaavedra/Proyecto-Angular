import { Component, OnInit } from '@angular/core';
import { DatosEstaticosService } from '../datos-estaticos.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-albums-container',
  templateUrl: './albums-container.component.html',
  styleUrls: ['./albums-container.component.css']
})
export class AlbumsContainerComponent implements OnInit {

  subscriptionDefaultAlbum: Subscription;
  subscriptionDefaultArtists: Subscription;
  subscriptionArtists: Subscription;
  subscriptionAlbum: Subscription;
  defaultAlbum: any;
  defaultArtists: any;
  album: any;
  artists: any;
  constructor(private service: DatosEstaticosService) { 
  }

  ngOnInit() {
    this.service.changePage("albums");
    this.subscriptionDefaultAlbum = this.service.newDefaultAlbum$.subscribe(
      defaultAlbum =>{
        this.defaultAlbum = defaultAlbum;
      }
    );
    this.subscriptionDefaultArtists = this.service.newDefaultArtists$.subscribe(
      defaultArtists =>{
        this.defaultArtists = defaultArtists;
      }
    );
    this.subscriptionAlbum = this.service.newAlbum$.subscribe(
      album =>{
        this.album = album;
        this.defaultAlbum = null;
        console.log("album");
        console.log(this.album);
      }
    );
    this.subscriptionArtists = this.service.newArtists$.subscribe(
      artists =>{
        this.artists = artists;
        console.log("artist");
        console.log(this.artists);
      }
    );
    
  }


}
