import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ALL_USERS_API: string = "http://springboot-k8s-mysql:30163/users";
  ADD_USER_API: string = "http://springboot-k8s-mysql:30163/addUser";
  constructor(private http: HttpClient, private rout: Router) { }

  getAllUsers() {
    return this.http.get(this.ALL_USERS_API);
  }

  addUser(data)
  {
    const headerDict = {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    const requestOptions = {
      headers: new Headers(headerDict),
    };
    return this.http.post(this.ADD_USER_API, JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
