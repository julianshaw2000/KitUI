import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Template } from '../_models/template';
import { Comp } from '../_models/comp';
import { environment } from 'src/environments/environment';
import { Compcount } from '../_models/compcount';
import { HelperModule } from './helper.module';


@Injectable({
  providedIn: 'root'
})

export class TemplatesService {



  url = environment.apiUrl;

  constructor(private httpClient: HttpClient,
    private helperModule: HelperModule) { }

  get(): Observable<Template[]> {
    return this.httpClient.get<Template[]>(this.url + 'templates');
  }


  copyCompsToCompcounts(comps: Comp[]): Compcount[] {
    return this.helperModule.copyCompsToCompcounts(comps);
  }

  create(template: Template, basket: Comp[]) {

    const compCounts = this.copyCompsToCompcounts(basket);

    const payload = {
      template: template,
      compCounts: compCounts
    };

    console.log(payload)

    return this.httpClient.post<Template>(this.url + 'templates', payload)


  }

  getById(id: number): Observable<Template> {
    return this.httpClient.get<Template>(this.url + `templates/${id}`);
  }

  update(payload: Template): Observable<Template> {
    return this.httpClient.put<Template>(
      this.url + `templates/${payload.id}`,
      payload
    );
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + `templates/${id}`);
  }


}
