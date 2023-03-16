import { Injectable } from '@angular/core';
import { Vehicule } from './vehicule';
import { VEHICULES } from './mock-vehicules';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
  private vehiculesUrl = '';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
  };
  constructor(
    private http: HttpClient,
  ) { }
  getVehicules(): Observable<Vehicule[]> {
    this.vehiculesUrl = 'http://localhost:3000/api/vehicules';
     const vehicules = this.http.get<Vehicule[]>(this.vehiculesUrl);
     return vehicules;
  } 
  getVehicule(id: string): Observable<Vehicule> {
    const body = new URLSearchParams();
    body.set('id', id);
    this.vehiculesUrl = 'http://localhost:3000/api/vehiculesById';
    const vehicule = this.http.post<Vehicule>(this.vehiculesUrl,body,this.httpOptions);
    return vehicule;
  }
  addVehicule(vehicule: Vehicule): Observable<Vehicule>{
    console.log(vehicule)
    const body = new URLSearchParams();
    body.set('County', vehicule.County);
    body.set('City', vehicule.City);
    this.vehiculesUrl = 'http://localhost:3000/api/vehicules/send'
    return this.http.post<Vehicule>(this.vehiculesUrl,body,this.httpOptions);
  }
  updateVehicule(vehicule: Vehicule): Observable<Vehicule>{
    console.log(vehicule);
    const body = new URLSearchParams();
    body.set('id', vehicule._id!);
    body.set('County', vehicule.County);
    body.set('City', vehicule.City);
    this.vehiculesUrl = 'http://localhost:3000/api/vehiculesById/sm'
    return this.http.post<Vehicule>(this.vehiculesUrl,body,this.httpOptions);
  }
  deleteVehicule(id: string): void{
    const body = new URLSearchParams();
    body.set('id', id);
    this.vehiculesUrl = 'http://localhost:3000/api/vehicules/delete';
    this.http.post(this.vehiculesUrl,body,this.httpOptions)
  }
}

