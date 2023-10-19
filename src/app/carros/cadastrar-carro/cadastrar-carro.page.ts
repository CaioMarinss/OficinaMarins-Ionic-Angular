import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/Carro';//models=atributos
import { CarroService } from 'src/app/services/carro.service';//services=metodos
import { Router } from '@angular/router';
import { format } from 'date-fns';


@Component({
  selector: 'app-cadastrar-carro',
  templateUrl: './cadastrar-carro.page.html',
  styleUrls: ['./cadastrar-carro.page.scss'],
})
export class CadastrarCarroPage implements OnInit {

  carro: Carro = new Carro

  data: Date;

  constructor(private carroService: CarroService,
              private route:Router) { }

  ngOnInit() {
  }

  salvar(){
    this.carroService.salvar(this.carro);
    this.route.navigateByUrl('/');
  }

  formatarData(): string {
    return format(this.data, 'dd/MM/yy');
  }
  
}
