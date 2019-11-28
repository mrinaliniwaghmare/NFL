import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CrimeDataServiceService {

  public crimeData;
  public playerData;
  public teamData;
  configUrl = "http://nflarrest.com/api/v1/"

  constructor(private http: HttpClient) { }

getData(details) {
  return this.http.get("http://nflarrest.com/api/v1/"+details);
}

}
