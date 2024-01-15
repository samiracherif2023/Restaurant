import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
// Backend server Adress
chefURL: string = "http://localhost:3000/chefs";
  constructor(private httpClient: HttpClient) { }
  // Response: Array of objects
getAllChefs() {
  return this.httpClient.get<{chefsArray:any,message:string}>(this.chefURL);
}
 //Response : One Object
 getChefById(id: any) {
  return this.httpClient.get<{chef:any}>(`${this.chefURL}/${id}`);
}
//Response : Message/Boolean
deleteChef(id: any) {
  return this.httpClient.delete<{isDeleted: boolean}>(`${this.chefURL}/${id}`);
}
//Response : Message / Boolean
addChef(chefObj) {
  return this.httpClient.post<{message:string}>(this.chefURL, chefObj);
}

editChef(newChef) {
  return this.httpClient.put<{isUpdated:boolean}>(this.chefURL, newChef);
}
}
