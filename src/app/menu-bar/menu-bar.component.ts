import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit{
  @Input()
  Home:string = ""
  @Input()
  Shop:string = ""
  @Input()
  About:string = ""
  @Input()
  Contact:string = ""
  @Input()
  Signup:string = ""
  @Input()
  login:string = ""



  constructor(){

  }

  ngOnInit():void{

  }
}
