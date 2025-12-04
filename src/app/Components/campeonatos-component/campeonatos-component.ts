import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Pais {
  nome: string;
  slug: string;     
  bandeira: string;
  favorito: boolean;
}

interface Ligas {
  nome: string;
  slug: string;
  logoCampeonato: string;
  ligaFavorita: boolean;
}

@Component({
  selector: 'app-campeonatos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './campeonatos-component.html',
  styleUrls: ['./campeonatos-component.scss'],
})

export class CampeonatosComponent {
  filtroAtivo: 'paises' | 'ligas' = 'paises';

  termoBusca = '';

  constructor(private router: Router) {}

  paises: Pais[] = [
    { nome: 'Espanha',        slug: 'espanha',        bandeira: 'assets/espanha-band.png',        favorito: false },
    { nome: 'Brasil',         slug: 'brasil',         bandeira: 'assets/brasil-band.png',         favorito: false },
    { nome: 'Croácia',        slug: 'croacia',        bandeira: 'assets/croacia-band.png',        favorito: false },
    { nome: 'França',         slug: 'franca',         bandeira: 'assets/franca-band.png',         favorito: false },
    { nome: 'Inglaterra',     slug: 'inglaterra',     bandeira: 'assets/inglaterra-band.png',     favorito: false },
    { nome: 'Italia',         slug: 'italia',         bandeira: 'assets/italia-band.png',         favorito: false },
    { nome: 'Dinamarca',      slug: 'dinamarca',      bandeira: 'assets/dinamarca-band.png',      favorito: false },
    { nome: 'Paraguai',       slug: 'paraguai',       bandeira: 'assets/paraguai-band.png',       favorito: false },
    { nome: 'Uruguai',        slug: 'uruguai',        bandeira: 'assets/uruguai-band.png',        favorito: false },
    { nome: 'Alemanha',       slug: 'alemanha',       bandeira: 'assets/alemanha-band.png',       favorito: false },
    { nome: 'Argentina',      slug: 'argentina',      bandeira: 'assets/argentina-band.png',      favorito: false },
    { nome: 'Bélgica',        slug: 'belgica',        bandeira: 'assets/belgica-band.png',        favorito: false },
    { nome: 'Russia',         slug: 'russia',         bandeira: 'assets/russia-band.png',         favorito: false },
    { nome: 'Estados Unidos', slug: 'estados-unidos', bandeira: 'assets/eua-band.png',            favorito: false },
    { nome: 'Colômbia',       slug: 'colombia',       bandeira: 'assets/colombia-band.png',       favorito: false },
    { nome: 'Mexico',         slug: 'mexico',         bandeira: 'assets/mexico-band.png',         favorito: false },
    { nome: 'Turquia',        slug: 'turquia',        bandeira: 'assets/turquia-band.png',        favorito: false },
    { nome: 'Portugal',       slug: 'portugal',       bandeira: 'assets/portugal-band.png',       favorito: false },
    { nome: 'Paises Baixos',  slug: 'paises-baixos',  bandeira: 'assets/holanda-band.png',        favorito: false },
    { nome: 'Emirados Árabes Unidos', slug: 'emirados-arabes-unidos', bandeira: 'assets/emiradosarabes-band.png', favorito: false },
    { nome: 'Qatar',          slug: 'qatar',          bandeira: 'assets/qatar-band.png',          favorito: false },
    { nome: 'Japão',          slug: 'japao',          bandeira: 'assets/japao-band.png',          favorito: false },
    { nome: 'Arábia Saudita', slug: 'arabia-saudita', bandeira: 'assets/arabia-band.png',         favorito: false },
    { nome: 'Marrocos',       slug: 'marrocos',       bandeira: 'assets/marrocos-band.png',       favorito: false },
    { nome: 'Egito',          slug: 'egito',          bandeira: 'assets/egito-band.png',          favorito: false },
    { nome: 'Tunísia',        slug: 'tunisia',        bandeira: 'assets/tunisia-band.png',        favorito: false },
    { nome: 'Austrália',      slug: 'australia',      bandeira: 'assets/australia-band.png',      favorito: false },
    { nome: 'Escócia',        slug: 'escocia',        bandeira: 'assets/escocia-band.png',        favorito: false },
    { nome: 'Venezuela',      slug: 'venezuela',      bandeira: 'assets/venezuela-band.png',      favorito: false },
    { nome: 'Chile',          slug: 'chile',          bandeira: 'assets/chile-band.png',          favorito: false },
    { nome: 'Equador',        slug: 'equador',        bandeira: 'assets/equador-band.png',        favorito: false },
    { nome: 'Bolivia',        slug: 'bolivia',        bandeira: 'assets/bolivia-band.png',        favorito: false },
    { nome: 'Coreia do Sul',  slug: 'coreia-do-sul',  bandeira: 'assets/coreiadosul-band.png',    favorito: false },
    { nome: 'Ucrânia',        slug: 'ucrania',        bandeira: 'assets/ucrania-band.png',        favorito: false },
    { nome: 'Suiça',          slug: 'suica',          bandeira: 'assets/suica-band.png',          favorito: false },
    { nome: 'Peru',           slug: 'peru',           bandeira: 'assets/peru-band.png',           favorito: false },
    { nome: 'Grécia',         slug: 'grecia',         bandeira: 'assets/grecia-band.png',         favorito: false },
    { nome: 'China',          slug: 'china',          bandeira: 'assets/china-band.png',          favorito: false },
    { nome: 'Internacional',  slug: 'internacional',  bandeira: 'assets/internacional-band.png',  favorito: false },
  ];

  get paisesOrdenados(): Pais[] {
    const texto = this.normalizar(this.termoBusca);

    return [...this.paises]
      .sort((a, b) => a.nome.localeCompare(b.nome))
      .filter((pais) => {
        if (!texto) return true; 
        return this.normalizar(pais.nome).includes(texto);
      });
  }

  selecionarFiltro(tipo: 'paises' | 'ligas'): void {
    this.filtroAtivo = tipo;
  }

  alternarFavorito(pais: Pais): void {
    pais.favorito = !pais.favorito;
  }

  abrirPais(pais: Pais): void {
    this.router.navigate(['/pais', pais.slug]);
  }

  campeonatos: Ligas[] = [
    { nome: 'Brasileirão Série A',        slug: 'brasileirao',        logoCampeonato: 'assets/campeonatos/brasil/brasileiro-serieA-logo.png',        ligaFavorita: false },
    { nome: 'Campeonato Argentino de Futebol',        slug: 'argentino',        logoCampeonato: 'assets/campeonatos/argentina/liga-argentina-logo.png',        ligaFavorita: false },
  ]

  get ligasOrdenadas(): Ligas[] {
    const texto = this.normalizar(this.termoBusca);

    return [...this.campeonatos]
      .sort((a, b) => a.nome.localeCompare(b.nome))
      .filter((ligas) => {
        if (!texto) return true; 
        return this.normalizar(ligas.nome).includes(texto);
      });
  }

   abrirLiga(liga: Ligas): void {
    this.router.navigate(['/ligas', liga.slug]);
  }

  trocarFavorito(liga: Ligas): void {
    liga.ligaFavorita = !liga.ligaFavorita;
  }

    private normalizar(valor: string): string {
    return valor
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

}
