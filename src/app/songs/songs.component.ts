import { Component, OnInit } from '@angular/core';
import { DatosEstaticosService } from '../datos-estaticos.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  constructor(private service: DatosEstaticosService) { 
  }

  ngOnInit() {
  	this.service.changePage("songs");
  }

}
