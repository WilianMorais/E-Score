import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-component.html',
  styleUrls: ['./select-component.scss'],
})
export class SelectComponent {
  esportes: string[] = [
    'Futebol',
    'Fórmula 1',
    'Basquete',
    'Vôlei',
    'UFC',
    'Futebol Americano',
    'Moto GP',
    'Boxe',
    'E-Sports',
  ];

  esporteAtual = 'Futebol';
  menuAberto = false;

  @Output() esporteAlterado = new EventEmitter<string>();

  alternarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  selecionarEsporte(esporte: string): void {
    this.esporteAtual = esporte;
    this.menuAberto = false;
    this.esporteAlterado.emit(esporte);
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }
}
