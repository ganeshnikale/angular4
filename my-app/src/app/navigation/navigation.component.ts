import { Component, OnInit } from '@angular/core';


@Component({
  selector:'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
    logopath: string = 'assets/img/logo.png';
    navigation :  any[] = [
      {"menu" : "HOME",
      "submenu":[
        'asd',
        '123'
      ]
    },
      {"menu" : "ABOUT"},
      {"menu" : "PROJECT"},
      {"menu" : "ACHIVMENT"},
      {"menu" : "EVENT"},
      {"menu" : "TESTIMONIAL"},
      {"menu" : "BLOG"},
      {"menu" : "CONTACT US"}
    ];
    
  constructor() { }

  ngOnInit() {
    console.log(this.navigation.length);
  }

}
