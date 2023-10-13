import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent implements OnInit{

@Input()
h1Content:string = "Artesanato no seu melhor"

@Input()
pContent:string = "Explore nossa coleção exclusiva de machados feitos à mão"


constructor(){

}

ngOnInit():void{

}
}
