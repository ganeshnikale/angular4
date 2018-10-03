import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { tap } from 'rxjs/operators';

import { IUsers } from './IUsers';

@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {

  private UsersUrl ='src/api/MOCK_DATA.json';


  //private UsersUrl ='http://maps.googleapis.com/maps/api/directions/json?origin=kurla&destination=Thane&mode=driving&departure_time=now&key=AIzaSyBEtwBX__OaQFZGsbDXumTssI4ZREJpHkY';

  constructor( private http : HttpClient) {
    
    
  }

  
  getUsersx(): Observable<IUsers[]> {
    return this.http.get<IUsers[]>(this.UsersUrl).pipe(
      tap(data => ('all' + JSON.stringify(data)))
    );
    
  }

  getNewUsers(): IUsers[]{
    return [
      {"id":1,"first_name":"Elsey","last_name":"zzzzzzzzzzzzzzzz","email":"erentelll0@so-net.ne.jp","gender":"Female","ip_address":"135.60.84.54"},
    {"id":2,"first_name":"Tan","last_name":"Pitrelli","email":"tpitrelli1@meetup.com","gender":"Male","ip_address":"115.212.240.194"},
    {"id":3,"first_name":"Myrilla","last_name":"Deehan","email":"mdeehan2@live.com","gender":"Female","ip_address":"46.19.50.23"},
    ];

  }
 



  getUsers(): IUsers[]{
    return [
      {"id":1,"first_name":"Elsey","last_name":"Rentelll","email":"erentelll0@so-net.ne.jp","gender":"Female","ip_address":"135.60.84.54"},
    {"id":2,"first_name":"Tan","last_name":"Pitrelli","email":"tpitrelli1@meetup.com","gender":"Male","ip_address":"115.212.240.194"},
    {"id":3,"first_name":"Myrilla","last_name":"Deehan","email":"mdeehan2@live.com","gender":"Female","ip_address":"46.19.50.23"},
    ]
  };
  
      
      
}
