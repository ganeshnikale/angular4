import { Component, OnInit } from '@angular/core';

import { LatLongService} from './lat-long.service';
import { ILatLong} from './ILatLong';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  PageTitle: string = 'assd';

  LatLongs : ILatLong[] = [];

  objectKeys = Object.keys;
  showme : boolean = false;

  FilterRegion : any[] =[];

  zones : any[] = [
    {'name':'jaipur', 'lat':'26.9124', 'long':'75.7873', 'index':'4', 'icon':'info'},
    {'name':'patana', 'lat':'25.5941', 'long':'85.1376', 'index':'3', 'icon':'library'},
  ];


regions :any[] = [
  { 
    'zone':'jaipur',
    'data':[
      {'name':'jodhpur', 'lat':'26.2389', 'long':'73.0243', 'index':'3', 'icon':'info'},
      {'name':'bikaner', 'lat':'28.0229', 'long':'73.3119', 'index':'2', 'icon':'library'},
      {'name':'Bhilwara', 'lat':'25.3214', 'long':'74.5870', 'index':'1', 'icon':'info'}
    ],
  },
  { 
    'zone':'patana',
    'data':[
      {'name':'jamshedpur', 'lat':'22.8046', 'long':'86.2029', 'index':'3', 'icon':'info'},
      {'name':'purnia', 'lat':'25.7771', 'long':'87.4753', 'index':'2', 'icon':'library'},
      {'name':'sambalpur', 'lat':'21.4669', 'long':'83.9812', 'index':'1', 'icon':'info'}
    ],
  }
];

BranchArr : any[] = [{
  'jaipur':[
    {'name':'jodhpur', 'lat':'26.2389', 'long':'73.0243', 'index':'3', 'icon':'info'},
      {'name':'bikaner', 'lat':'28.0229', 'long':'73.3119', 'index':'2', 'icon':'library'},
      {'name':'Bhilwara', 'lat':'25.3214', 'long':'74.5870', 'index':'1', 'icon':'info'}
  ],
  'patna':[
    {'name':'jamshedpur', 'lat':'22.8046', 'long':'86.2029', 'index':'3', 'icon':'info'},
      {'name':'purnia', 'lat':'25.7771', 'long':'87.4753', 'index':'2', 'icon':'library'},
      {'name':'sambalpur', 'lat':'21.4669', 'long':'83.9812', 'index':'1', 'icon':'info'}
  ]

}];

  constructor( private LatLongService : LatLongService) { }

  ngOnInit() {
    
    this.LatLongService.getLatLong().subscribe(LatLong => this.LatLongs = LatLong )
    console.log(this.regions);
    console.log(this.BranchArr);
    

  }

  ZoneName(zonename:string):void{
    console.log(zonename);
    if(zonename){
      this.showme = true;
      for( let val of this.regions){
        if(val.zone == zonename)
        {
          this.FilterRegion = val;
        }
      }
      console.log(this.FilterRegion);
    }
  }
}


