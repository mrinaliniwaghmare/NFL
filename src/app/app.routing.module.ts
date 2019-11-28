import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TopCrimesComponent } from './top-crimes/top-crimes.component';
import { TopPlayersForCrimeComponent } from './top-players-for-crime/top-players-for-crime.component';
import { TopTeamsForCrimeComponent } from './top-teams-for-crime/top-teams-for-crime.component';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
@NgModule({
  declarations: [ 
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'crime', component: TopCrimesComponent },
      { path: 'team', component: TopTeamsForCrimeComponent },
      { path: 'player', component: TopPlayersForCrimeComponent },
      { path: 'chart', component: TimelineChartComponent },
      { path: '**', redirectTo: 'crime' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


