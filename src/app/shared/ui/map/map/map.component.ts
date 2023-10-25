import { Component, OnInit } from '@angular/core';

declare var google: any; 

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const apiKey = 'AIzaSyDM39K_g330M_p2wpiHgRGMFyhXawjIUKY';

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      this.initMap();
    };

    document.body.appendChild(script);
  }

  initMap() {
    const moscowLocation = { lat: 55.7558, lng: 37.6176 };

    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10, // Adjust the zoom level as needed
      center: moscowLocation
    });

    const marker = new google.maps.Marker({
      position: moscowLocation,
      map: map,
      title: 'Moscow, Russia'
    });
  }
}
