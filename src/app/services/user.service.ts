import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
// Backend server Adress
userURL: string = "http://localhost:3000/users";
// httpClient : un livreur
  constructor( private httpClient: HttpClient) { }
// Response: Array of objects
getAllUsers() {
  return this.httpClient.get<{usersArray:any,message:string}>(this.userURL);
}
//Response : Message / Boolean /Signup
signup(userObj) {
  return this.httpClient.post<{message:string}>(this.userURL, userObj);
}
 //Response : One Object
 getUserById(id: any) {
  return this.httpClient.get<{user:any}>(`${this.userURL}/${id}`);
}
editProfile(newProfile) {
  return this.httpClient.put<{isUpdated:boolean}>(this.userURL, newProfile);
}
login(email:string,password:string){
  return this.httpClient.get<{findedUser:any}>(`${this.userURL}/${email}/${password}`);
}
deleteUser(id: any) {
  return this.httpClient.delete<{isDeleted: boolean}>(`${this.userURL}/${id}`);
}

}
