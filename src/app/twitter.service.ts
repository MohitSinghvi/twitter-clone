import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(public http: HttpClient) { }
  
  createTweet(token: any, text: any){
    return this.http.post('http://127.0.0.1:10000/create', {"text": text, "token": token});
  }

  deleteTweet(token: any, id: any){
    return this.http.post('http://127.0.0.1:10000/delete', {"id": id, "token": token});
  }

  getOauthToken(code: any){
    return this.http.post("http://127.0.0.1:10000/getTwitterOauth",{'code':code});
  }
  
}
