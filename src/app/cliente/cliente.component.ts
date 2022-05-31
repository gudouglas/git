import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  nome: string = '';
  tipo: number = 1;
  genero: number = 1;

  observacao: string = '';
  inativo: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
