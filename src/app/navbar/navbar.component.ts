import { Component, OnInit } from '@angular/core';
import { DatosEstaticosService } from '../datos-estaticos.service';
import { Subscription }   from 'rxjs/Subscription';

declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  subscription: Subscription;
  page: string;
  content: string;
  constructor(private service: DatosEstaticosService) { 
  	this.subscription = service.pageChanged$.subscribe(
      page =>{
        this.page = page;
      }
    );
  }

  ngOnInit() {
    /*$(document).ready(function() {
      $("#search").autocomplete({
        source: function(request, response) {
            $.ajax({
                type: "GET",
                url: "https://api.spotify.com/v1/search",
                dataType: "json",
                data: {
                    type: "artist",
                    limit: 3,
                    contentType: "application/json; charset=utf-8",
                    format: "json",
                    q: request.term
                },
                success: function(data) {
                  console.log("success" + data);
                    response($.map(data.artists.items, function(item) {
                        return {
                            label: item.name,
                            value: item.name,
                            id: item.id
                        }
                    }));
                },
                error: function(jqXHR, textStatus, errorThrown){
                    console.log("error handler!");                        
                }
            });
        },
        minLength: 3,
        select: function(event, ui) {
            $("#search").val(ui.item.value);
            window.location.href = "#" + ui.item.value;
        },
    });

  });*/
  }

  search(){
    switch (this.page) {
      case "albums":
        this.service.searchAlbum(this.content);
        break;
      case "artists":
        // code...
        break;
      case "songs":
        // code...
        break;
      
      default:
        // code...
        break;
    }
  }

}
