import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

import { ILatLong} from './ILatLong';

@Injectable({
  providedIn: 'root'
})
export class LatLongService {
  private LatLongUrl = 'src/api/latlong.json'

  constructor(private http : HttpClient) { }

  getLatLong(): Observable <ILatLong[]>{
    return this.http.get<ILatLong[]>(this.LatLongUrl).pipe(
      tap( data=> console.log('all' + JSON.stringify(data)))
    );
  }
}
