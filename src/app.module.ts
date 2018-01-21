import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';

import { AppComponent }  from './app.component';
import { GMapsComponent }  from './gmaps.component';
import { GMapsMarkerComponent }  from './gmaps.marker.component';
import { GMapsPolylineComponent }  from './gmaps.polyline.component';
import { GMapsIconComponent }  from './gmaps.icon.component';
import { GMapsInfoWindowComponent }  from './gmaps.infowindow.component';
import { GMapsExampleComponent }  from './gmaps.example.component';
import { GMapsMarkerExampleComponent }  from './gmaps.marker.example.component';
import { GMapsPolylineExampleComponent }  from './gmaps.polyline.example.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, GMapsComponent, GMapsMarkerComponent,
        GMapsPolylineComponent, GMapsIconComponent, GMapsInfoWindowComponent,
        GMapsExampleComponent, GMapsMarkerExampleComponent,
        GMapsPolylineExampleComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }