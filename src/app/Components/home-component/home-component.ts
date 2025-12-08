import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SelectComponent } from '../select-component/select-component';
import { CampeonatosComponent } from '../campeonatos-component/campeonatos-component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SelectComponent, CampeonatosComponent],
  templateUrl: './home-component.html',
  styleUrls: ['./home-component.scss'],
})
export class HomeComponent {
  abaAtual: 'jogos' | 'campeonatos' | 'equipes' = 'jogos';

  constructor(private readonly router: Router) {

    const nav = this.router.getCurrentNavigation();
    const aba = nav?.extras?.state?.['aba'] as
      | 'jogos'
      | 'campeonatos'
      | 'equipes'
      | undefined;

    if (aba) {
      this.abaAtual = aba;
    }
  }

  onEsporteAlterado(esporte: string): void {
    console.log('Esporte selecionado:', esporte);
  }

  alterarAba(aba: 'jogos' | 'campeonatos' | 'equipes'): void {
    this.abaAtual = aba;
  }
}
