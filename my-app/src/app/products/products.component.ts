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

  constructor( private LatLongService : LatLongService) { }

  ngOnInit() {
    
    this.LatLongService.getLatLong().subscribe(LatLong => this.LatLongs = LatLong )
    console.log(this.LatLongService.getLatLong().subscribe(LatLong => this.LatLongs = LatLong ));
  }

}


