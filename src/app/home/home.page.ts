import { Component, OnInit } from '@angular/core';
import { Carro } from '../models/Carro';
import { CarroService } from '../services/carro.service';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  data: Date;

  public listaCarros: Carro[] = [];
  cardVisivel = false

  constructor(private alertController: AlertController, private carroService: CarroService) {}

  ngOnInit() {
    this.buscarCarros();
  }

  mostrarDetalhes() {
    this.cardVisivel = !this.cardVisivel 
  }

  buscarCarros() {
  this.carroService.buscarCarros().subscribe(dados => {
    this.listaCarros = dados.map((registro: any) => ({
      id: registro.payload.doc.id,
      placa: registro.payload.doc.data()['placa'],
      modelo: registro.payload.doc.data()['modelo'],
      ano: registro.payload.doc.data()['ano'],
      data: registro.payload.doc.data()['data'],
      servico: registro.payload.doc.data()['servico']
    }));
  });
}


  async apagarCarro(id: string) {
    const alert = await this.alertController.create({
      header: 'Quer mesmo excluir estes dados?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {}
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this.carroService.apagar(id);
          }
        }
      ]
    });
    await alert.present();
    this.buscarCarros();
  }
}
