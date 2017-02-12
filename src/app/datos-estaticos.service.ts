import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DatosEstaticosService {
  private defaultAlbum: Subject<any> = new Subject<any>();
  private defaultArtists: Subject<any> = new Subject<any>();
  private defaultTrack: Subject<any> = new Subject<any>();
  private album: Subject<any> = new Subject<any>();
  private artists: Subject<any> = new Subject<any>();
  private track: Subject<any> = new Subject<any>();
  private page = new Subject<string>();

  pageChanged$ = this.page.asObservable();
  newDefaultAlbum$ = this.defaultAlbum.asObservable();
  newDefaultArtists$ = this.defaultArtists.asObservable();
  newDefaultTrack$ = this.defaultTrack.asObservable();
  newAlbum$ = this.album.asObservable();
  newArtists$ = this.artists.asObservable();
  newTrack$ = this.track.asObservable();

  constructor(private ajax:Http) {
  	this.getDefaultAlbum();
    this.getDefaultTrack()
  }

  changePage(page: string){
  	this.page.next(page);
  	console.log("Se ha cambiado de página. Es: " + page);
  }

  getDefaultAlbum(){
  	this.ajax.get('https://api.spotify.com/v1/albums/2pApb6rFBqoecge6TDgE9z')
  	.map(response => response.json())
  	.subscribe( data => {
        this.defaultAlbum.next(data);
        var stringIds = "?ids=";
        for (var i = 0; i < data.tracks.items.length; ++i) {
          stringIds += data.tracks.items[i].artists[0].id + ",";
        }
        stringIds = stringIds.slice(0, -1);
        this.getDefaultArtists(stringIds);
      });
  }

  getDefaultArtists(ids: string){
    this.ajax.get('https://api.spotify.com/v1/artists/' + ids)
    .map(response => response.json().artists)
    .subscribe( data => {
        this.defaultArtists.next(data);
      });
  }

  searchAlbum(album: string){
    this.ajax.get('https://api.spotify.com/v1/search?type=album&q=' + album)
    .map(response => response.json().albums)
    .subscribe( data => {
        if(data['items'].length == 0) {
          this.album.next(null);
        }else{
          this.album.next(data);
          this.getArtists(data.items[0].artists[0].id);
        }
        
      });
  }

  getArtists(id: string){
    this.ajax.get('https://api.spotify.com/v1/artists/' + id)
    .map(response => response.json())
    .subscribe( data => {
        this.artists.next(data);
      });
  }

  getDefaultTrack(){
    this.ajax.get('https://api.spotify.com/v1/tracks/6VRghJeP6I0w1KxkdWFfIh')
    .map(response => response.json())
    .subscribe( data => {
        this.defaultTrack.next(data);
        console.log("track");
        console.log(data);
      });
  }

  searchSong(song: string){
    this.ajax.get('https://api.spotify.com/v1/search?type=track&q=' + song)
    .map(response => response.json())
    .subscribe( data => {
      console.log("search song");
      console.log(data);
        if(data['tracks'].items.length == 0) {
          this.track.next(null);
        }else{
          this.track.next(data['tracks']);
          var stringIds = "?ids=";
          for (var i = 0; i < data.tracks.items.length; ++i) {
            stringIds += data.tracks.items[i].artists[0].id + ",";
          }
          stringIds = stringIds.slice(0, -1);
          this.getArtists(stringIds);
        }
        
      });
  }

}
