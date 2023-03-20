import {  ChangeDetectionStrategy, ChangeDetectorRef , Component } from '@angular/core';

import { Vehicule } from '../vehicule';

import { VehiculeService } from '../vehicule.service';

import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiculeComponent {
  vehicules: Vehicule[] = [];
  public config: PaginationInstance = {
    id: 'DEFAULT_PAGINATION_ID',
    itemsPerPage: 4,
    currentPage: 1,
    totalItems: this.vehicules.length
};
  constructor(private vehiculeService: VehiculeService, private cdr: ChangeDetectorRef){   
  }

  ngOnInit(): void{
    this.getVehicules();
  }

  getVehicules(): void{
    this.vehiculeService.getVehicules().subscribe(vehicules => {
      this.vehicules = vehicules
      console.log(this.vehicules);
      this.cdr.detectChanges();
    });
  }
  filerVehiculesByCity(city: String): void{
    const c = city.trim();
    if(c === ""){
      this.getVehicules();
    }else{
      this.vehiculeService.getVehicules().subscribe(vehicules => {
      this.vehicules = vehicules.filter(v => v.City === c);
      this.cdr.detectChanges();
    })
    }
    
  }
  editClick(e:Event): void{
    e.stopPropagation();
  }

  deleteClick(e:Event, id:string): void{
    console.log("smail.com");
    e.stopPropagation();
    this.vehiculeService.deleteVehicule(id).subscribe(_=>{
      console.log("smail");
    });
    this.getVehicules();
  }
}