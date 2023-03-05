import { Injectable } from '@angular/core';
import { Vehicule } from './vehicule';
import { VEHICULES } from './mock-vehicules';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {

  constructor() { }
  getVehicules(): Observable<Vehicule[]> {
     const vehicules = of(VEHICULES);
     return vehicules;
  }
}
