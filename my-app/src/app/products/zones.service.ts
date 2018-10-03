import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

import {IZone} from './IZone';

@Injectable({
  providedIn: 'root'
})
export class ZonesService {

  private ZonesUrl = 'src/api/zones.json'; 

  constructor( private http : HttpClient) { }

  getZones(): Observable <IZone[]>{
    return this.http.get<IZone[]>(this.ZonesUrl).pipe(
      tap( data => ('all' +JSON.stringify(data)))
    );
  }
}
