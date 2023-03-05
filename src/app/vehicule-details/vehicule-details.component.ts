import { Component, Input } from '@angular/core';
import { Vehicule } from '../vehicule';

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.css']
})
export class VehiculeDetailsComponent {
  @Input() vehicule?: Vehicule;
}
 