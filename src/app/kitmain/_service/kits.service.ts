import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kit } from '../_models/kit';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class KitsService {
  
  url = environment.apiUrl;
 

  constructor(private httpClient: HttpClient) { }

  
  makeKits(basket: any[]) {

    
    this.httpClient.post<any>(this.url + 'kits/makekits', basket);

   console.log('New kits >', basket)
    }


  get(): Observable<Kit[]> {
    console
    return this.httpClient.get<Kit[]>(this.url + 'kits');
  }

  create(payload: Kit) {
    return this.httpClient.post<Kit>(this.url + 'kits', payload);

  }

  getById(id: number): Observable<Kit> {
    return this.httpClient.get<Kit>(this.url + `kits/${id}`);
  }

  update(payload: Kit): Observable<Kit> {
    return this.httpClient.put<Kit>(
      this.url + `kits/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + `kits/${id}`);
  }


}
