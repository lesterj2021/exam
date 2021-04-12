import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  endPoint = 'http://api.nixsercloud.com/v1/cms/header?token=9d04c2c980aab37a16976b463a3df8776e402444963bb92fd4456c1eca354xyz';

  constructor(private httpClient: HttpClient) { }

  getHeader()  {
    return this.httpClient.get(this.endPoint);
  }

}
