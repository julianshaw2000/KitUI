import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Template } from '../_models/template';
import { Comp } from '../_models/comp';
import { environment } from 'src/environments/environment';
import { Compcount } from '../_models/compcount';

@Injectable({
  providedIn: 'root'
})

export class TemplatesService {

  

  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Template[]> {
    return this.httpClient.get<Template[]>(this.url + 'templates');
  }

  

  create(template: Template, basket: Compcount[]) {
     console.log(basket)

    // let basketnum = basket.map(item => item.id);


    // const { id, count } = basket;
    // const nameObj = { id, count };

    // this.itemsInit = this.itemsInit.map(item => {
    //   item.count = 1
    //   return item;
    // });

    // payload.components = basket;  // save to comp with id

   // template.compcount = 

   // const payload: {tempData: Template, compData: Comp[]} = {tempData: template, compData: basket}

    // console.log(basket)

   // const dout = basket.map(  x =>   ({id: x.id, qty: x.currentQty}) )
   // console.log("dout ->", dout);

    // const { compCode: _, compName: _, dateAdded: _, ...newPay} = basket


   // return this.httpClient.post<any>(this.url + 'templates', payload);

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
