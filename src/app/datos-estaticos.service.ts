import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable, Subject} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DatosEstaticosService {
  private defaultAlbum: Subject<any> = new Subject<any>();
  private page = new Subject<string>();

  pageChanged$ = this.page.asObservable();
  newAlbum$ = this.defaultAlbum.asObservable();

  constructor(private ajax:Http) {
  	this.getDefaultAlbum();
  }

  changePage(page: string){
  	this.page.next(page);
  	console.log("Se ha cambiado de página. Es: " + page);
  }

  getDefaultAlbum(){
  	this.ajax.get('https://api.spotify.com/v1/albums/2FNWw1uYcSvjp6jgZSP6Re')
  	.map(response => response.json())
  	.subscribe( data => this.defaultAlbum.next(data))
  }

}
