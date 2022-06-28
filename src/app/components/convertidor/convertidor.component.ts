import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;

  lista : string[] = ['USD','EUR','LIBRA'];

  convertir(){
    switch(this.tengo){
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad 
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.94
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.80;
        }
        break;
      case 'EUR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.06;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad * 0.85;
        }
        break;
      case 'LIBRA':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.25;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 1.18;
        }
        if(this.quiero === 'LIBRA'){
          this.total = this.cantidad;
        }
        break;
    }
  }
}
