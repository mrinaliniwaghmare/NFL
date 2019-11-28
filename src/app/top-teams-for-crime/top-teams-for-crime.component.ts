import { Component, OnInit } from '@angular/core';
import { CrimeDataServiceService } from '../crime-data-service.service';

@Component({
  selector: 'app-top-teams-for-crime',
  templateUrl: './top-teams-for-crime.component.html',
  styleUrls: ['./top-teams-for-crime.component.css']
})
export class TopTeamsForCrimeComponent implements OnInit {
  public teamData;
  constructor(public crimeDataService: CrimeDataServiceService) { }

  ngOnInit() {
    this.crimeDataService.getData('team').subscribe(data => {
      this.teamData = data;
    });
   
  }

}
