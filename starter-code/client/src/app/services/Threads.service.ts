import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs';

@Injectable()
export class ThreadsService {

  BASE_URL = 'http://localhost:3000';
  options: any = { withCredentials: true };

constructor(private http: Http) { }


  getThreads() {
    return this.http.get(`${this.BASE_URL}/api/threads`)
      .map(res => res.json());
  }

  getThread(id) {
    return this.http.get(`${this.BASE_URL}/api/threads/${id}`)
      .map(res => res.json());
  }

  newThread(info) {
    return this.http.post(`${this.BASE_URL}/api/threads`, info, this.options)
      .map(res => res.json());
  }

  newReply(id, info) {
    return this.http.post(`${this.BASE_URL}/api/threads/${id}/replies`, info, this.options)
      .map(res => res.json());
  }

}
