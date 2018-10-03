import { Component, OnInit } from '@angular/core';


import { LatLongService } from './lat-long.service';
import { ZonesService } from './zones.service';
import { ILatLong } from './ILatLong';
import {IZone} from './IZone';
import {FiltercityPipe} from '../filtercity.pipe';


@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  PageTitle: string = 'assd';

  LatLongs : any[] = [];

  objectKeys = Object.keys;
  showme : boolean = false;

  FilterRegion : any[] =[];

  FilterBranch : any[] = [];


  ZonesArr : IZone[] = [];


RegionsArr :any[] = [
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
  'region':'bikaner',
  'data':[
    {'name':'sangaria', 'lat':'29.7903','long': '74.4631','index': '1','icon': 'info'},
    {'name':'ratangarh', 'lat':'26.2983','long': '74.2737','index': '2','icon': 'info'},
    {'name':'nokha', 'lat':'27.5562','long': '73.4732','index': '1','icon': 'library'},
  ],
},
{
  'region':'Bhilwara',
  'data':[
    {'name':'dhunwala', 'lat':'25.5014','long': '74.5494','index': '1','icon': 'info'},
    {'name':'sanganer', 'lat':'26.8061','long': '75.7669','index': '2','icon': 'info'},
    {'name':'bhadoo', 'lat':'25.4292','long': '74.4643','index': '1','icon': 'info'},
  ],
}
];

  constructor( private LatLongService : LatLongService, private ZonesService : ZonesService) { }

  ngOnInit() {
    
    this.LatLongService.getLatLong().subscribe(LatLong => this.LatLongs = LatLong );
    this.ZonesService.getZones().subscribe( ZoneArr => this.ZonesArr = ZoneArr );

    //console.log(this.RegionsArr);
    //console.log(this.BranchArr);
    

  }

  getName(_name:string):void{
    if(_name){
      this.showme = true;
      for( let val of this.RegionsArr){
        if(val.zone == _name)
        {
          this.FilterRegion = val;
         this.FilterBranch = [];
        }
      }
      
      for(let val of this.BranchArr){
        if(val.region == _name){
          this.FilterBranch = val;
        }
      }
    }
  }
}


