import { Component, OnInit } from '@angular/core';
import { DatosEstaticosService } from '../datos-estaticos.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-albums-container',
  templateUrl: './albums-container.component.html',
  styleUrls: ['./albums-container.component.css']
})
export class AlbumsContainerComponent implements OnInit {

  subscription: Subscription;
  defaultAlbum: any;
  constructor(private service: DatosEstaticosService) { 
  }

  ngOnInit() {
    this.service.changePage("albums");
    this.subscription = this.service.newAlbum$.subscribe(
      defaultAlbum =>{
        this.defaultAlbum = defaultAlbum;
        console.log(this.defaultAlbum);
      }
    );
  }


}
