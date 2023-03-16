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
  op: string = 'detail';
  constructor(
    private route:ActivatedRoute,
    private vehiculeService: VehiculeService,
    private location: Location,
  ){}
  getVehicule(id1: string): void{
    const id = id1;
    this.vehiculeService.getVehicule(id).subscribe(vehicule => this.vehicule = vehicule);
  }
  ngOnInit(): void{
    const id = String(this.route.snapshot.paramMap.get('id'))
    this.op = String(this.route.snapshot.paramMap.get('op'))
    if ( id != 'null') {
      this.getVehicule(id);
    }
  }
  add(County: string, City:string): void{
    County = County.trim()
    City = City.trim()
    this.vehiculeService.addVehicule({County,City} as Vehicule).subscribe(_=> this.location.back())
  }
  save(_id:string, County:string , City:string): void{
    _id = _id.trim();
    County = County.trim()
    City = City.trim()
    this.vehiculeService.updateVehicule({_id, County, City}).subscribe(_=> this.location.back())
  }


}


