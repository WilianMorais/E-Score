import { Routes } from '@angular/router';
import { CarregamentoComponent } from './Components/loading-component/loading-component';
import { HomeComponent } from './Components/home-component/home-component';
import { PaisComponent } from './Components/pais-component/pais-component'; 
import { LigasComponent } from './Components/ligas-component/ligas-component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'carregamento' },
  { path: 'carregamento', component: CarregamentoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pais/:slug', component: PaisComponent },
  { path: 'ligas/:slug', component: LigasComponent },
  { path: '**', redirectTo: 'carregamento' },
];
