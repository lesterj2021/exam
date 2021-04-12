import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  endPoint = 'http://api.nixsercloud.com/v1/cms/submit-contact-form?token=9d04c2c980aab37a16976b463a3df8776e402444963bb92fd4456c1eca354xyz';


  constructor(private httpClient: HttpClient) { }

  sendMessage(data) {
    return this.httpClient.post(this.endPoint, JSON.stringify(data));
  }
}
