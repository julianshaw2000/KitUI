import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-condolist',
  templateUrl: './condolist.component.html',
  styleUrls: ['./condolist.component.scss']
})
export class CondolistComponent implements OnInit {



  condoList = [
    {
      "condoId": "101",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "102",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "103",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "104",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "105",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "106",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "107",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "108",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "109",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "110",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "111",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "112",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "113",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "114",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "115",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "116",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "117",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "118",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "201",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "202",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "203",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "204",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "205",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "206",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "207",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "208",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "209",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "210",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "211",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "212",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "213",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "214",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "215",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "216",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "217",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "218",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "301",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "302",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "303",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "304",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "305",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "306",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "307",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "308",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "309",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "310",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "311",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "312",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "313",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "314",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "315",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "316",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "317",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "318",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "401",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "402",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "403",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "404",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "405",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "406",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "407",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "408",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "409",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "410",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "411",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "412",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "413",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "414",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "415",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "416",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "417",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "418",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "419",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    },
    {
      "condoId": "420",
      "rooms": "1",
      "location": "",
      "class": "",
      "maintenance": "",
      "cess": ""
    }
  ]



  @Output() newItemEvent = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }
  onclick(condoId: string) {
    console.log(condoId);
    this.newItemEvent.emit(condoId);

  }

}
