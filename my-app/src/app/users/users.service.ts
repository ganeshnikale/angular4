import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { IUsers } from './IUsers';

@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {

  private UsersUrl ='api/MOCK_DATA.json';

  constructor( private http : HttpClient) {
    
  }

  
  getUsers() :Observable <IUsers[]> {
   
    return this.http.get<IUsers[]>(this.UsersUrl);

  }



  // getUsers(): IUsers[]{
  //   return [
  //     {"id":1,"first_name":"Elsey","last_name":"Rentelll","email":"erentelll0@so-net.ne.jp","gender":"Female","ip_address":"135.60.84.54"},
  //   {"id":2,"first_name":"Tan","last_name":"Pitrelli","email":"tpitrelli1@meetup.com","gender":"Male","ip_address":"115.212.240.194"},
  //   {"id":3,"first_name":"Myrilla","last_name":"Deehan","email":"mdeehan2@live.com","gender":"Female","ip_address":"46.19.50.23"},
  //   ]
  // }
  
      
      
}
