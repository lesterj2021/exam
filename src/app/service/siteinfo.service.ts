import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteinfoService {

  private endPoint= '';
  
  constructor(private httpClient: HttpClient) { }

  getInfo() {

  }
  
}
