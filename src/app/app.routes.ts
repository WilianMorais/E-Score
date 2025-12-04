import { Routes } from '@angular/router';
import { CarregamentoComponent } from './Components/loading-component/loading-component';
import { HomeComponent } from './Components/home-component/home-component';
import { PaisComponent } from './Components/pais-component/pais-component'; 

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'carregamento' },
  { path: 'carregamento', component: CarregamentoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pais/:slug', component: PaisComponent },
  { path: '**', redirectTo: 'carregamento' },
];
