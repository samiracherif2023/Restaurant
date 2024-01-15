import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
// Backend server Adress
platURL: string = "http://localhost:3000/plats";
// httpClient : un livreur
  constructor( private httpClient: HttpClient ) { }
// Response: Array of objects
getAllPlats() {
  return this.httpClient.get<{platsArray:any,message:string}>(this.platURL);
}
 //Response : One Object
 getPlatById(id: any) {
  return this.httpClient.get<{plat:any}>(`${this.platURL}/${id}`);
}
//Response : Message/Boolean
deletePlat(id: any) {
  return this.httpClient.delete<{isDeleted: boolean}>(`${this.platURL}/${id}`);
}
//Response : Message / Boolean
addPlat(platObj) {
  return this.httpClient.post<{message:string}>(this.platURL, platObj);
}

editPlat(newPlat) {
  return this.httpClient.put<{isUpdated:boolean}>(this.platURL, newPlat);
}

}
