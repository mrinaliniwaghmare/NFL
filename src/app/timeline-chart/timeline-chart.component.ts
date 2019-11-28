import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TimelineServiceService } from '../timeline-service.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-timeline-chart',
  templateUrl: './timeline-chart.component.html',
  styleUrls: ['./timeline-chart.component.css']
})
export class TimelineChartComponent implements OnInit {
  public timelineData;
  public chart;
  @ViewChild('chartSection') chartRef: ElementRef;
  constructor(public timelineServiceService: TimelineServiceService) { }

  ngOnInit() {
    // User input to allow which crime timeline to render can be allowed
    // using DUI crime for now 
    this.timelineServiceService.getTimelineData('crime', 'DUI').subscribe(data => {
      this.timelineData = data;

      let month = this.timelineData.map(timelineData => timelineData.Month);
      let year = this.timelineData.map(timelineData => timelineData.Year);
      let arrestCount = this.timelineData.map(timelineData => timelineData.arrest_count);
      let arrestCountByYear = this.timelineData.reduce((acc, eachobj) => {

        if(acc[eachobj.Year]){
           acc[eachobj.Year] = +acc[eachobj.Year] + +eachobj.arrest_count;
        } else {
           acc[eachobj.Year] = eachobj.arrest_count;
        } 
        return acc;
      }, {});

      console.log(arrestCountByYear);
      
      let arrestLabel = []
      this.timelineData.forEach((res) => {
          let jsdate = new Date(res.Month * 1000)
          let arr = res.arrest_count
          arrestLabel.push(jsdate)
      })
  let ctx = 
      this.chart = new Chart((this.chartRef).nativeElement.getContext('2d'), {
        type: 'bar',
        data: {
          labels: arrestLabel,
          datasets: [
            { 
              data: arrestCountByYear,
              borderColor: "#3cba9f",
              fill: false
            },
            { 
              data: year,
              borderColor: "#ffcc00",
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });
  }
}
