import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarCarroPageRoutingModule } from './alterar-carro-routing.module';

import { AlterarCarroPage } from './alterar-carro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarCarroPageRoutingModule
  ],
  declarations: [AlterarCarroPage]
})
export class AlterarCarroPageModule {}
