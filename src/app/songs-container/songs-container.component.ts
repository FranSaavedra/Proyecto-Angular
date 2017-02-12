import { Component, OnInit } from '@angular/core';
import { DatosEstaticosService } from '../datos-estaticos.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-songs-container',
  templateUrl: './songs-container.component.html',
  styleUrls: ['./songs-container.component.css']
})
export class SongsContainerComponent implements OnInit {

  subscriptionDefaultTrack: Subscription;
  subscriptionTrack: Subscription;
  subscriptionArtists: Subscription;
  defaultTrack: any;
  track: any;
  artists: any;
  constructor(private service: DatosEstaticosService) { 
  }

  ngOnInit() {
    this.service.changePage("songs");
    this.subscriptionDefaultTrack = this.service.newDefaultTrack$.subscribe(
      defaultTrack =>{
        this.defaultTrack = defaultTrack;
      }
    );
    this.subscriptionTrack = this.service.newTrack$.subscribe(
      track =>{
        this.track = track;
        this.defaultTrack = null;
        console.log("songs");
        console.log(this.track);
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
