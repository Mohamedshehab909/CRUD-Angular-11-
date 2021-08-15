import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class DemoService {

 private Baseurl ="http://localhost:3000/Users";
  constructor(private ourClint:HttpClient) { }

  GetAllUser()
  {
    return this.ourClint.get(this.Baseurl);
  }
  GetUserById(id:number)
  {
    return this.ourClint.get(`${this.Baseurl}/${id}`);
  }
  AddNewUser(user:any)
  {
    return this.ourClint.post(this.Baseurl, user);
  }
  UpdateUserById(id:number , user:any)
  {
    return this.ourClint.put(`${this.Baseurl}/${id}`,user);
  }
  DeleteUser(id:number)
  {
    return this.ourClint.delete(`${this.Baseurl}/${id}`);
  }
}
