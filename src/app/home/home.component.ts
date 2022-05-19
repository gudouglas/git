import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!: string;
  public texto!: string;
  classToDiv ={};

  constructor() { 
 this.classToDiv={
   'text-success':true
 };
}    


  ngOnInit(): void {
 this.titulo! = 'Lorem Inpsum é simplesmente';
 this.texto! = 'Lorem Inpsum é simplemente uma simulação de texto da industrial' 
  
  }

}
