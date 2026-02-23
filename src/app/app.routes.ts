import { Routes } from '@angular/router';
import { CarregamentoComponent } from './Components/loading-component/loading-component';
import { HomeComponent } from './Components/home-component/home-component';
import { PaisComponent } from './Components/pais-component/pais-component'; 
import { LigasComponent } from './Components/ligas-component/ligas-component';
import { TelaLoginComponent } from './Components/login-component/login.component';
import { NovaSenhaComponent } from './Components/recuperar-component/novasenha.component';
import { CodigoVerificacaoComponent } from './Components/recuperar-component/codigoverificacao.component';
import { RecuperacaoEmailComponent } from './Components/recuperar-component/recuperacaoemail.component';
import { InfoUsuarioComponent } from './Components/cadastroUser-component/info-usuario.component';
import { LocalizacaoUsuarioComponent } from './Components/cadastroUser-component/localizacao-usuario.component';
import { AcessoUsuarioComponent } from './Components/cadastroUser-component/acesso-usuario.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'carregamento' },
  { path: 'carregamento', component: CarregamentoComponent },
  { path: 'login', component: TelaLoginComponent },
  { path: 'recuperacao', redirectTo: 'recuperacao/email', pathMatch: 'full' },
  { path: 'recuperacao/email', component: RecuperacaoEmailComponent },
  { path: 'recuperacao/codigo', component: CodigoVerificacaoComponent },
  { path: 'recuperacao/nova-senha', component: NovaSenhaComponent },
  { path: 'cadastro', redirectTo: 'cadastro/info', pathMatch: 'full' },
  { path: 'cadastro/info', component: InfoUsuarioComponent },
  { path: 'cadastro/localizacao', component: LocalizacaoUsuarioComponent },
  { path: 'cadastro/acesso', component: AcessoUsuarioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'pais/:slug', component: PaisComponent },
  { path: 'ligas/:slug', component: LigasComponent },
  { path: '**', redirectTo: 'carregamento' },
];
