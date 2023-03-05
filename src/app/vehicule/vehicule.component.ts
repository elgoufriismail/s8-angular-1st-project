import { Component } from '@angular/core';

import { Vehicule } from '../vehicule';

import { VehiculeService } from '../vehicule.service';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent {
  vehicules: Vehicule[] = [];
  selectedVehicule?: Vehicule;
  constructor(private vehiculeService: VehiculeService){   
  }
  ngOnInit(): void{
    this.getVehicules();
  }
  getVehicules(): void{
    this.vehiculeService.getVehicules().subscribe(vehicules => this.vehicules = vehicules);
  }
  showDetails(vehicule: Vehicule): void {
    this.selectedVehicule = vehicule;
  }
}
