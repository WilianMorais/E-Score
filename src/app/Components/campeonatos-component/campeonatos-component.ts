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

interface GrupoLigas {
  regiao: string;
  ligas: Ligas[];
}

interface Ligas {
  nome: string;
  slug: string;
  logoCampeonato: string;
  ligaFavorita: boolean;
  regiao: string;
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
    { nome: 'Bundesliga',                         slug: 'bundesliga',      logoCampeonato: 'assets/campeonatos/alemanha/bundesliga-logo.png',            ligaFavorita: false,      regiao: 'Europa' },
    { nome: '2.Bundesliga',                       slug: 'bundesliga2',     logoCampeonato: 'assets/campeonatos/alemanha/bundesliga-b-logo.png',          ligaFavorita: false,      regiao: 'Europa' },
    { nome: '3. Liga',                            slug: 'liga3',           logoCampeonato: 'assets/campeonatos/alemanha/liga3-logo.png',                 ligaFavorita: false,      regiao: 'Europa' },
    { nome: 'Liga Profissional Saudita',          slug: 'ligaSaudita',     logoCampeonato: 'assets/campeonatos/arabia/liga1-logo.png',                   ligaFavorita: false,      regiao: 'Ásia'  },
    { nome: 'Liga da Primeira Divisão Saudita',   slug: 'ligaSauditaB',    logoCampeonato: 'assets/campeonatos/arabia/liga2-logo.png',                   ligaFavorita: false,      regiao: 'Ásia'  },
    { nome: 'Campeonato Argentino de Futebol',    slug: 'argentino',       logoCampeonato: 'assets/campeonatos/argentina/liga-argentina-logo.png',       ligaFavorita: false,      regiao: 'América do Sul'  },   
    { nome: 'Primeira Nacional',                  slug: 'argentinoB',      logoCampeonato: 'assets/campeonatos/argentina/liga-argentina2-logo.png',      ligaFavorita: false,      regiao: 'América do Sul'  }, 
    { nome: 'A League',                           slug: 'australiano',     logoCampeonato: 'assets/campeonatos/australia/a-liga-logo.png',               ligaFavorita: false,      regiao: 'Oceania'  },
    { nome: 'Liga Jupiler',                       slug: 'campBelgaA',      logoCampeonato: 'assets/campeonatos/belgica/belga-logo.png',                  ligaFavorita: false,      regiao: 'Europa'  },  
    { nome: 'Challenger Pro League',              slug: 'campBelgaB',      logoCampeonato: 'assets/campeonatos/belgica/belga2-logo.png',                 ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Division Profesional',               slug: 'boliviano',       logoCampeonato: 'assets/campeonatos/bolivia/bolivia-liga1-logo.png',          ligaFavorita: false,      regiao: 'América do Sul'  },  
    { nome: 'Brasileirão Série A',                slug: 'brasileiraoA',    logoCampeonato: 'assets/campeonatos/brasil/brasileiro-serieA-logo.png',       ligaFavorita: false,      regiao: 'América do Sul'  },
    { nome: 'Brasileirão Série B',                slug: 'brasileiraoB',    logoCampeonato: 'assets/campeonatos/brasil/brasileiro-serieB-logo.png',       ligaFavorita: false,      regiao: 'América do Sul'  },
    { nome: 'Liga de Primera',                    slug: 'campChilenoA',    logoCampeonato: 'assets/campeonatos/chile/liga-primera-logo.png',             ligaFavorita: false,      regiao: 'América do Sul'  },
    { nome: 'Liga de Acesso',                     slug: 'campChilenoB',    logoCampeonato: 'assets/campeonatos/chile/liga-acesso-logo.png',              ligaFavorita: false,      regiao: 'América do Sul'  },
    { nome: 'Super Liga Chinesa',                 slug: 'superLiga',       logoCampeonato: 'assets/campeonatos/china/superliga-logo.png',                ligaFavorita: false,      regiao: 'Ásia'  },
    { nome: 'Liga Um',                            slug: 'ligaUm',          logoCampeonato: 'assets/campeonatos/china/liga1-logo.png',                    ligaFavorita: false,      regiao: 'Ásia'  },
    { nome: 'Categora Primera A',                 slug: 'colombiano',      logoCampeonato: 'assets/campeonatos/colombia/categoriaA-logo.png',            ligaFavorita: false,      regiao: 'América do Sul'  },
    { nome: 'K League 1',                         slug: 'coreiaK1',        logoCampeonato: 'assets/campeonatos/coreiadosul/k1-logo.png',                 ligaFavorita: false,      regiao: 'Ásia'  },
    { nome: 'K League 2',                         slug: 'coreiaK2',        logoCampeonato: 'assets/campeonatos/coreiadosul/k2-logo.png',                 ligaFavorita: false,      regiao: 'Ásia'  },
    { nome: 'MAXtv Prva Liga',                    slug: 'croata',          logoCampeonato: 'assets/campeonatos/croacia/max-logo.png',                    ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Super Liga',                         slug: 'dinamarques1',    logoCampeonato: 'assets/campeonatos/dinamarca/divisao1-logo.png',             ligaFavorita: false,      regiao: 'Europa'  },
    { nome: '1° Divisão',                         slug: 'dinamarques2',    logoCampeonato: 'assets/campeonatos/dinamarca/superliga-logo.png',            ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Premier League',                     slug: 'egipcio',         logoCampeonato: 'assets/campeonatos/egito/pl1-logo.png',                      ligaFavorita: false,      regiao: 'África'  },
    { nome: 'UAE Pro League',                     slug: 'uae',             logoCampeonato: 'assets/campeonatos/arabesunidos/uae-logo.png',               ligaFavorita: false,      regiao: 'Ásia'  },
    { nome: 'Liga Pro',                           slug: 'equatoriano',     logoCampeonato: 'assets/campeonatos/equador/liga-pro-logo.png',               ligaFavorita: false,      regiao: 'América do Sul'  },
    { nome: 'Premiership League',                 slug: 'escocia',         logoCampeonato: 'assets/campeonatos/escocia/premiership-logo.png',            ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'La Liga',                            slug: 'espanhol1',       logoCampeonato: 'assets/campeonatos/espanha/laliga-logo.png',                 ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'La Liga Hypermotion',                slug: 'espanhol2',       logoCampeonato: 'assets/campeonatos/espanha/laliga2-logo.png',                ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Major League Soccer - MLS',          slug: 'mls',             logoCampeonato: 'assets/campeonatos/eua/mls-logo.png',                        ligaFavorita: false,      regiao: 'América do Norte'  },
    { nome: 'USL Championship',                   slug: 'usl',             logoCampeonato: 'assets/campeonatos/eua/usl-logo.png',                        ligaFavorita: false,      regiao: 'América do Norte'  },
    { nome: 'Ligue 1',                            slug: 'ligue1',          logoCampeonato: 'assets/campeonatos/franca/ligue1-logo.png',                  ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Ligue 2',                            slug: 'ligue2',          logoCampeonato: 'assets/campeonatos/franca/ligue2-logo.png',                  ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Super League Greece',                slug: 'grego',           logoCampeonato: 'assets/campeonatos/grecia/sleague-logo.png',                 ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Premier League',                     slug: 'ingles1',         logoCampeonato: 'assets/campeonatos/inglaterra/premier-logo.png',             ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'EFL Championship',                   slug: 'ingles2',         logoCampeonato: 'assets/campeonatos/inglaterra/efl-logo.png',                 ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Serie A - Tim',                      slug: 'italiano1',       logoCampeonato: 'assets/campeonatos/italia/seriea-logo.png',                  ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Serie B',                            slug: 'italiano2',       logoCampeonato: 'assets/campeonatos/italia/serieb-logo.png',                  ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'J1 League',                          slug: 'japones1',        logoCampeonato: 'assets/campeonatos/japao/j1-logo.png',                       ligaFavorita: false,      regiao: 'Ásia'  },
    { nome: 'J2 League',                          slug: 'japones2',        logoCampeonato: 'assets/campeonatos/japao/j2-logo.png',                       ligaFavorita: false,      regiao: 'Ásia'  },
    { nome: 'Botola Pro',                         slug: 'marroquino',      logoCampeonato: 'assets/campeonatos/marrocos/botola-logo.png',                ligaFavorita: false,      regiao: 'África'  },
    { nome: 'Liga MX',                            slug: 'mexicano1',       logoCampeonato: 'assets/campeonatos/mexico/mx-logo.png',                      ligaFavorita: false,      regiao: 'América do Norte'  },
    { nome: 'Liga MX Expansion',                  slug: 'mexicano2',       logoCampeonato: 'assets/campeonatos/mexico/mx-expansion-logo.png',            ligaFavorita: false,      regiao: 'América do Norte'  },
    { nome: 'Eredivisie',                         slug: 'holandes1',       logoCampeonato: 'assets/campeonatos/holanda/eredivisie-logo.png',             ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Erste Divisie',                      slug: 'holandes2',       logoCampeonato: 'assets/campeonatos/holanda/2divisao-logo.png',               ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Primera División Paraguay',          slug: 'paraguaio1',      logoCampeonato: 'assets/campeonatos/paraguai/primera-logo.png',               ligaFavorita: false,      regiao: 'América do Sul'  },
    { nome: 'División Intermedia',                slug: 'paraguaio2',      logoCampeonato: 'assets/campeonatos/paraguai/intermedia-logo.png',            ligaFavorita: false,      regiao: 'América do Sul'  },
    { nome: 'Liga 1',                             slug: 'peruano',         logoCampeonato: 'assets/campeonatos/peru/liga1-logo.png',                     ligaFavorita: false,      regiao: 'América do Sul'  },
    { nome: 'Primeira Liga',                      slug: 'portugues1',      logoCampeonato: 'assets/campeonatos/portugal/primeira-logo.png',              ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Segunda Liga',                       slug: 'portugues2',      logoCampeonato: 'assets/campeonatos/portugal/segunda-logo.png',               ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Qatar Stars League',                 slug: 'stars',           logoCampeonato: 'assets/campeonatos/qatar/stars-logo.png',                    ligaFavorita: false,      regiao: 'Ásia'  },
    { nome: 'Russian Prmier League',              slug: 'russo',           logoCampeonato: 'assets/campeonatos/russia/russian-logo.png',                 ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Swiss Super League',                 slug: 'suico',           logoCampeonato: 'assets/campeonatos/suica/swiss-logo.png',                    ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Ligue 1',                            slug: 'campLeague',      logoCampeonato: 'assets/campeonatos/tunisia/ligue1-logo.png',                 ligaFavorita: false,      regiao: 'África'  },
    { nome: 'Super Lig',                          slug: 'turco',           logoCampeonato: 'assets/campeonatos/turquia/super-logo.png',                  ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Ukrainin Premier League',            slug: 'ucraniano',       logoCampeonato: 'assets/campeonatos/ucrania/liga1-logo.png',                  ligaFavorita: false,      regiao: 'Europa'  },
    { nome: 'Primera Division Uruguaya',          slug: 'uruguaio',        logoCampeonato: 'assets/campeonatos/uruguai/primera-logo.png',                ligaFavorita: false,      regiao: 'América do Sul'  },
    { nome: 'Primera División Venezolana',        slug: 'venezuelano',     logoCampeonato: 'assets/campeonatos/venezuela/primera-logo.png',              ligaFavorita: false,      regiao: 'América do Sul'  },
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

  get ligasPorRegiao(): GrupoLigas[] {
  const ligasFiltradas = this.ligasOrdenadas;
  const mapa = new Map<string, Ligas[]>();
  for (const liga of ligasFiltradas) {
    const chave = liga.regiao || 'Outras ligas';
    if (!mapa.has(chave)) {
      mapa.set(chave, []);}
        mapa.get(chave)!.push(liga);}
    return Array.from(mapa.entries()).map(([regiao, ligas]) => ({
      regiao,
      ligas,
    }))
    .sort((a, b) =>
      this.normalizar(a.regiao).localeCompare(this.normalizar(b.regiao))
    );
  }

   abrirLiga(liga: Ligas): void {
    this.router.navigate(['/ligas', liga.slug], {
      state: {nomeLiga : liga.nome}
    });
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
