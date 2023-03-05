import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VehiculeComponent } from './vehicule/vehicule.component';
import { VehiculeDetailsComponent } from './vehicule-details/vehicule-details.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiculeComponent,
    VehiculeDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
