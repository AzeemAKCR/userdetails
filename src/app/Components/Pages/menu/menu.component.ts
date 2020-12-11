import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  User: any;
  user: any;

  constructor(private route: Router,private rout: Router) { }

  icons: Array<string>;
  config = {
    paddingAtStart: true,
    classname: 'Menu',
    listBackgroundColor: '#00ccff',
    fontColor: '#FFFFFF',
    backgroundColor: '#00ccff',
    selectedListFontColor: '#0074D9',
  };

  appitems: any = [
    
    {
      label: 'User',
      link: '/home/user',
      icon: 'supervisor_account'
    },
    {
      label: 'Post',
      link: '/home/post',
      icon: 'assignment_turned_in'
    },
    
  ];

  ngOnInit() {
    this.icons = [
      "build", "assignment", "book", "extension", "store"
    ];
    this.user = this.appitems;
    this.rout.navigateByUrl('/home/user');
  }

  selectedItem(event: any): void{
            this.route.navigate([event['link']]);
  }
  }
