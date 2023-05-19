import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job } from '../_models/job';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class JobsService {

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Job[]> {
    console
    return this.httpClient.get<Job[]>(this.url + 'jobs');
  }

  create(payload: Job) {
    return this.httpClient.post<Job>(this.url + 'jobs', payload);

  }

  getById(id: number): Observable<Job> {
    return this.httpClient.get<Job>(this.url + `jobs/${id}`);
  }

  update(payload: Job): Observable<Job> {
    return this.httpClient.put<Job>(
      this.url + `jobs/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + `jobs/${id}`);
  }


}
