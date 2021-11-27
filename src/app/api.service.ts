import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://fakeapi.jsonparseronline.com';

  getPosts() {
    return this.http.get(this.baseUrl + `/posts`).toPromise();
  }

  getComments() {
    return this.http.get(this.baseUrl + `/comments`).toPromise();
  }

  getCategories() {
    return this.http.get(this.baseUrl + `/categories`).toPromise();
  }

  getProfile() {
    return this.http.get(this.baseUrl + `/profile`).toPromise();
  }

  getUsers() {
    return this.http.get(this.baseUrl + `/users`).toPromise();
  }


}
