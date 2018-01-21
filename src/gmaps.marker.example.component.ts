import { Component } from '@angular/core';
import { LatLngWrapper } from './core/LatLngWrapper';

@Component({
    selector: 'gmaps-marker-example',
    templateUrl: 'gmaps.marker.example.component.html'
})
export class GMapsMarkerExampleComponent {

    latLngWrapper: LatLngWrapper = new LatLngWrapper(33.55770396470521, -7.5963592529296875);
    zoom: number = 9;
    gmapsOptions: google.maps.MapOptions = { center: this.latLngWrapper.latLng, zoom: this.zoom };

    gmaps: google.maps.Map;

    icon: google.maps.Icon;
    iconScaledSize: google.maps.Size = new google.maps.Size(30, 30);

    markers: LatLngWrapper[] = new Array<LatLngWrapper>();
    markersWithIcon: LatLngWrapper[] = new Array<LatLngWrapper>();

    iconCreated(icon : google.maps.Icon) {
        this.icon = icon;
    }

    onGMapsCreation(gmaps: google.maps.Map) {
        this.gmaps = gmaps;
    }

    onGMapsClick(mouseEvent: google.maps.MouseEvent) {
        this.markers.push(LatLngWrapper.fromLatLng(mouseEvent.latLng));
    }

    onGMapsRightClick(mouseEvent: google.maps.MouseEvent) {
        this.markersWithIcon.push(LatLngWrapper.fromLatLng(mouseEvent.latLng));
    }

    onMarkerRightClick(latLngWrapper: LatLngWrapper) {
        this.markers.splice(this.markers.indexOf(latLngWrapper),1);
    }

    onMarkerWithIconRightClick(latLngWrapper: LatLngWrapper) {
        this.markersWithIcon.splice(this.markersWithIcon.indexOf(latLngWrapper),1);
    }

}