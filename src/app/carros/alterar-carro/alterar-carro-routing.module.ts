import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarCarroPage } from './alterar-carro.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarCarroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarCarroPageRoutingModule {}
