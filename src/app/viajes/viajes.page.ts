// Importa los módulos necesarios
import { Component, OnInit, NgZone } from '@angular/core';
import { AlertController } from '@ionic/angular'; // Agrega esta importación

declare var google: any;

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.page.html',
  styleUrls: ['./viajes.page.scss'],
})
export class ViajesPage implements OnInit {

  private map: any;
  private searchBox: any;

  constructor(private zone: NgZone, private alertController: AlertController) { } 

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {
    const googleMapsScript = document.createElement('script');
    googleMapsScript.src =  "https://maps.googleapis.com/maps/api/js?key=AIzaSyA43NJDRk9YJJp4T6JtfbCO7t9mbQpha-E&callback=initMap";

    googleMapsScript.async = true;
    googleMapsScript.defer = true;

    const scriptLoaded = new Promise((resolve) => {
      googleMapsScript.onload = resolve;
    });

    document.head.appendChild(googleMapsScript);

    scriptLoaded.then(() => {
      this.initMap();
    });
  }

  initMap() {
    const mapOptions = {
      center: { lat: -33.03359023376858, lng: -71.53331285009457 },
      zoom: 15,
    };

    this.map = new google.maps.Map(document.getElementById('map'), mapOptions);
    this.initAutocomplete();
  }

  initAutocomplete() {
    const input = document.getElementById('pac-input') as HTMLInputElement;
    this.searchBox = new google.maps.places.SearchBox(input);

    this.searchBox.addListener('places_changed', () => {
      const places = this.searchBox.getPlaces();

      if (places.length === 0) {
        return;
      }

      // Actualiza el mapa con la nueva ubicación
      this.zone.run(() => {
        this.map.setCenter(places[0].geometry.location);
        this.map.setZoom(15);
      });

      
      console.log('Ubicación seleccionada:', places[0]);
    });
  }

  buscarUbicacion(event: any) {
    const input = event.target.value;

    // Lógica de búsqueda, puedes usar el valor de input

   
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: input }, (results: any[], status: any) => {
      if (status === 'OK') {
        this.zone.run(() => {
          this.map.setCenter(results[0].geometry.location);
          this.map.setZoom(15);
        });
      } else {
        console.error('Error al geocodificar la ubicación:', status);
      }
    });
  }

  // Función para crear y confirmar el viaje
  async crearYConfirmarViaje() {
  
    console.log('Viaje creado y confirmado');

    // Muestra la alerta
    const alert = await this.alertController.create({
      header: 'Viaje Confirmado',
      message: 'Tu vehículo viene en camino.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
