import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comp } from '../_models/comp';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CompsService {

  //url = "http://localhost:3000/"
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Comp[]> {
    return this.httpClient.get<Comp[]>(this.url + 'comps');
  }

  create(payload: Comp) {
    return this.httpClient.post<Comp>(this.url + 'comps', payload);

  }

  getById(id: number): Observable<Comp> {
    return this.httpClient.get<Comp>(this.url + `comps/${id}`);
  }

  update(recordId: number, payload: Comp): Observable<Comp> {
    return this.httpClient.put<Comp>(
      this.url + `comps/${recordId}`,
      payload
    );
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + `comps/${id}`);
  }


}
