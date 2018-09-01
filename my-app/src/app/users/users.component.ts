import { Component, OnInit } from '@angular/core';
import { IUsers } from './IUsers';
import { UsersserviceService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  Users: IUsers[] = [];

  constructor(private UsersserviceService : UsersserviceService ) { }

  ngOnInit() {
    this.Users = this.UsersserviceService.getUsers();
  }

}



