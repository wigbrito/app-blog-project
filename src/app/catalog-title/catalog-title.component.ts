import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog-title',
  templateUrl: './catalog-title.component.html',
  styleUrls: ['./catalog-title.component.css']
})
export class CatalogTitleComponent implements OnInit{
@Input()
imgContent:string = "https://northmen.com/upload/available_items/633/3.jpg"
@Input()
h2Content:string = "Machados artesanais, aventura forjada"


constructor(){

}

ngOnInit():void{

}

}
