  import { Component, OnInit } from '@angular/core';

  import { IUsers } from './IUsers';
  import {INumber } from './INumbers';
  import { UsersserviceService } from './users.service';
  import { NumbersService } from './numbers.service';



  @Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
  })

  export class UsersComponent implements OnInit {
    hideme: boolean = true;
    filter: string = '';
    Users: IUsers[] = [];
  
    // Numbers : any[] = [
    //   {"id":1,"first_name":"Elsey","last_name":"Rentelll","email":"erentelll0@so-net.ne.jp","gender":"Female","ip_address":"135.60.84.54"}
    // ];
    Numbers : INumber[] = []; 
    // Logs : IUsers[] = [];
    // Usersx: IUsers[] = [];

    constructor(private UsersserviceService: UsersserviceService, private NumbersService : NumbersService) { }
    ngOnInit(): void {
      //this.Users = this.UsersserviceService.getUsers();
      //this.Logs = this.UsersserviceService.getNewUsers();
      this.UsersserviceService.getUsersx().subscribe(Users => this.Users = Users);

      this.NumbersService.getNumbers().subscribe(number => this.Numbers = number);
      //this.Numbers = this.NumbersService.getNumbers();
      
      //console.log(this.Numbers = this.NumbersService.getNumbers());
      //this.getUsers();
      //console.log(this.Users = this.UsersserviceService.getUsers());
      //console.log(this.Usersx = this.UsersserviceService.getUsersx());
    
    }


    
    RemoveMe(index :number): void{
      
      this.Numbers.splice(index, 1);
    };

    PushVal(newUser: string): void{
      if (newUser){
        this.Numbers.push({ "mobile_no":newUser, "fax":newUser+"1" });
       
      }
    }
  
  }