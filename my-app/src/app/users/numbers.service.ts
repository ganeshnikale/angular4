import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { INumber } from './INumbers';

@Injectable({
  providedIn: 'root'
})
export class NumbersService {

  private NumbersUrl =' src/api/numbers_data.json';

  constructor(private http : HttpClient) { }

  getNumbers(): Observable<INumber[]>{
    return this.http.get<INumber[]>(this.NumbersUrl).pipe(
      tap(data=> console.log('all' + JSON.stringify(data)))
    );
  }
}

