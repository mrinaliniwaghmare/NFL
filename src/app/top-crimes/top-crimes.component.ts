import { Component, OnInit } from '@angular/core';
import { CrimeDataServiceService } from '../crime-data-service.service';

@Component({
  selector: 'app-top-crimes',
  templateUrl: './top-crimes.component.html',
  styleUrls: ['./top-crimes.component.css']
})
export class TopCrimesComponent implements OnInit {
public crimeData;
  constructor(public crimeDataService: CrimeDataServiceService) { }

  ngOnInit() {
    this.crimeDataService.getData('crime').subscribe(data => {
      this.crimeData = data;
    });
  }

}
