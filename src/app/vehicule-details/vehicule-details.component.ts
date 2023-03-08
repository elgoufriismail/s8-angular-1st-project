import { Component } from '@angular/core';
import { Vehicule } from '../vehicule';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { VehiculeService } from '../vehicule.service';


@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.css']
})
export class VehiculeDetailsComponent {
  vehicule?: Vehicule;
  constructor(
    private route:ActivatedRoute,
    private vehiculeService: VehiculeService,
    private location: Location,
  ){}
  getVehicule(): void{
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.vehiculeService.getVehicule(id).subscribe(vehicule => this.vehicule = vehicule);
  }
  ngOnInit(): void{
    this.getVehicule();
  }

}
 