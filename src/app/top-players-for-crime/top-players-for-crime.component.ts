import { Component, OnInit } from '@angular/core';
import { CrimeDataServiceService } from '../crime-data-service.service';

@Component({
  selector: 'app-top-players-for-crime',
  templateUrl: './top-players-for-crime.component.html',
  styleUrls: ['./top-players-for-crime.component.css']
})
export class TopPlayersForCrimeComponent implements OnInit {
public playerData;
  constructor(public crimeDataService: CrimeDataServiceService) { }

  ngOnInit() {
    this.crimeDataService.getData('player').subscribe(data => {
      this.playerData = data;
    });
  }

}
