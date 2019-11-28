import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CrimeDataServiceService } from './crime-data-service.service';
import { AppComponent } from './app.component';
import { TopCrimesComponent } from './top-crimes/top-crimes.component';
import { TopPlayersForCrimeComponent } from './top-players-for-crime/top-players-for-crime.component';
import { TopTeamsForCrimeComponent } from './top-teams-for-crime/top-teams-for-crime.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { TimelineChartComponent } from './timeline-chart/timeline-chart.component';
import { TimelineServiceService } from './timeline-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TopCrimesComponent,
    TopPlayersForCrimeComponent,
    TopTeamsForCrimeComponent,
    TimelineChartComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
  ],
  providers: [CrimeDataServiceService, TimelineServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
