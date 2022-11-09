import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tourist } from './tourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {
  
  baseUrl="http://localhost:4005/tourist";

  getUrl="http://localhost:4005/tourist/getTourist";

  constructor(private httpClient: HttpClient) { }

  registerTourist(tourist: Tourist) : Observable<Object>{
    console.log(tourist);
    return this.httpClient.post(`${this.baseUrl}`, tourist);
  }

  getTourist(): Observable<Tourist[]>{
    return this.httpClient.get<Tourist[]>(`${this.getUrl}`);
  }

}
