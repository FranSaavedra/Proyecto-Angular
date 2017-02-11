import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DatosEstaticosService {
  private defaultAlbum: Subject<any> = new Subject<any>();
  private defaultArtists: Subject<any> = new Subject<any>();
  private album: Subject<any> = new Subject<any>();
  private artists: Subject<any> = new Subject<any>();
  private page = new Subject<string>();

  pageChanged$ = this.page.asObservable();
  newDefaultAlbum$ = this.defaultAlbum.asObservable();
  newDefaultArtists$ = this.defaultArtists.asObservable();
  newAlbum$ = this.album.asObservable();
  newArtists$ = this.artists.asObservable();

  constructor(private ajax:Http) {
  	this.getDefaultAlbum();
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
        this.album.next(data);
        this.getArtists(data.items[0].artists[0].id);
      });
  }

  getArtists(id: string){
    this.ajax.get('https://api.spotify.com/v1/artists/' + id)
    .map(response => response.json())
    .subscribe( data => {
        this.artists.next(data);
      });
  }

}
