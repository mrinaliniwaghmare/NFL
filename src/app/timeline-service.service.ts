import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TimelineServiceService {

  constructor(private http: HttpClient) { }

  getTimelineData(details,crimeId) {
    return this.http.get("http://nflarrest.com/api/v1/"+details+"/timeline/"+crimeId);
  }
}
