import { Component, OnInit } from '@angular/core';
import { IUsers } from './IUsers';
import { UsersserviceService } from './users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  hideme :boolean = true;
  Users: IUsers[] = [];
  // Logs : IUsers[] = [];
  // Usersx: IUsers[] = [];

  constructor(private UsersserviceService : UsersserviceService ) { }

  ngOnInit() : void {
    //this.Users = this.UsersserviceService.getUsers();
    //this.Logs = this.UsersserviceService.getNewUsers();
    this.UsersserviceService.getUsersx().subscribe( Users => this.Users = Users)

    //this.getUsers();


    //console.log(this.Users = this.UsersserviceService.getUsers());
    //console.log(this.Usersx = this.UsersserviceService.getUsersx());
  }
 
  consoleMsg() : void{
    console.log('hiiii');
    this.hideme = !this.hideme
  }

}



