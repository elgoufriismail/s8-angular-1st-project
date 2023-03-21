import { Component, ViewChild } from '@angular/core';
import { Vehicule } from '../vehicule';

import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { VehiculeService } from '../vehicule.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  vehicules: Vehicule[] = [];
  barChartData!: ChartData<'bar'>;
  constructor(
    private vehiculeService: VehiculeService
  ){}
  
  ngOnInit(): void{
    this.getVehicules();
    
  }
  getVehicules(): void{
    this.vehiculeService.getVehicules().subscribe(vehicules => {
      this.vehicules = vehicules;
      this.barChartData = {
        labels: [ 'maroc', 'france', 'china', 'garmany' ],
        datasets: [  
          { data: [ this.vehicules.filter(v => v.County == "maroc").length,  this.vehicules.filter(v => v.County == "maroc").length, this.vehicules.filter(v => v.County == "china").length, this.vehicules.filter(v => v.County == "germany").length], label: 'Series A' }
        ]
      };
     
    });
  }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];
  
    // events
    public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    }
  
    public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    }

}
