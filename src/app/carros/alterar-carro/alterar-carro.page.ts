import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/models/Carro';
import { CarroService } from 'src/app/services/carro.service';
import { Router, ActivatedRoute } from '@angular/router';
import { format } from 'date-fns';

@Component({
  selector: 'app-alterar-carro',
  templateUrl: './alterar-carro.page.html',
  styleUrls: ['./alterar-carro.page.scss'],
})
export class AlterarCarroPage implements OnInit {

  carro: Carro = new Carro();

  data: Date;

  constructor(private carroService:CarroService,
              private route:Router,
              private rotaAtiva:ActivatedRoute
  ) { 
    this.carro.id = this.rotaAtiva.snapshot.params['id'];
  }

  ngOnInit() {
    this.carroService.buscarPorId(this.carro.id).subscribe((dados:any)=>{
      this.carro.ano = dados['ano'];
      this.carro.data = dados['data'];
      this.carro.modelo = dados['modelo'];
      this.carro.placa = dados['placa'];
      this.carro.servico = dados['servico'];
    })
  }
  
  salvar(){
    this.carroService.alterar(this.carro);
    this.route.navigateByUrl('/');
}

formatarData(): string {
  return format(this.data, 'dd/MM/yy');
}
}
