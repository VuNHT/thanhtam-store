import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerAllService {
  public url = 'http://5d7e423fd756030014184189.mockapi.io/thanhtam-store';
  constructor(
    private http: HttpClient
  ) { }

  public getData() {
    return this.http.get(this.url);
  }

  public postData(data) {
    return this.http.post(this.url, data);
  }

  public deleteData(id) {
    return this.http.delete(this.url + `/${id}`);
  }

  public putData(id, data) {
    return this.http.put(this.url + `/${id}`, data);
  }
}
