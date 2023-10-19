import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'carros/alterar-carro/:id',
    loadChildren: () => import('./carros/alterar-carro/alterar-carro.module').then( m => m.AlterarCarroPageModule)
  },
  {
    path: 'carros/cadastrar-carro',
    loadChildren: () => import('./carros/cadastrar-carro/cadastrar-carro.module').then( m => m.CadastrarCarroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
