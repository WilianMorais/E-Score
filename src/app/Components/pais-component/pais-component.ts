import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Competicao {
  nome: string;
  temporada: string;
  logo: string;
  favorito: boolean;
  tipo: 'liga' | 'copa';
}

interface PaisDetalhe {
  slug: string;
  nome: string;
  bandeira: string;
  ligas: Competicao[];
  copas: Competicao[];
}

@Component({
  selector: 'app-pais',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pais-component.html',
  styleUrls: ['./pais-component.scss'],
})
export class PaisComponent {
  pais?: PaisDetalhe;

  abaAtiva: 'ligas' | 'copas' = 'ligas';
  termoBusca = '';

  private readonly paisesDetalhes: PaisDetalhe[] = [
    {
      slug: 'alemanha',
      nome: 'Alemanha',
      bandeira: 'assets/alemanha-band.png',
      ligas: [
        {
          nome: 'Bundesliga',
          temporada: '2024/25',
          logo: 'assets/campeonatos/alemanha/bundesliga-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: '2. Bundesliga',
          temporada: '2024/25',
          logo: 'assets/campeonatos/alemanha/bundesliga-b-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: '3. Liga',
          temporada: '2024/25',
          logo: 'assets/campeonatos/alemanha/liga3-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'DFB-Pokal',
          temporada: '2024/25',
          logo: 'assets/campeonatos/alemanha/dfb-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'arabia-saudita',
      nome: 'Arábia Saudita',
      bandeira: 'assets/arabia-band.png',
      ligas: [
        {
          nome: 'Liga Profissional Saudita',
          temporada: '2024/25',
          logo: 'assets/campeonatos/arabia/liga1-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'Liga da Primeira Divisão Saudita',
          temporada: '2024/25',
          logo: 'assets/campeonatos/arabia/liga2-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Taça do Rei',
          temporada: '2024/25',
          logo: 'assets/campeonatos/arabia/taca-rei.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'argentina',
      nome: 'Argentia',
      bandeira: 'assets/argentina-band.png',
      ligas: [
        {
          nome: 'Campeonato Argentino de Futebol',
          temporada: '2024/25',
          logo: 'assets/campeonatos/argentina/liga-argentina-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'Primeira Nacional',
          temporada: '2024/25',
          logo: 'assets/campeonatos/argentina/liga-argentina2-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa da Argentina',
          temporada: '2024/25',
          logo: 'assets/campeonatos/argentina/copa-argentina.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'australia',
      nome: 'Austrália',
      bandeira: 'assets/australia-band.png',
      ligas: [
        {
          nome: 'A League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/australia/a-liga-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [],
    },
    {
      slug: 'belgica',
      nome: 'Bélgica',
      bandeira: 'assets/belgica-band.png',
      ligas: [
        {
          nome: 'Liga Jupiler',
          temporada: '2024/25',
          logo: 'assets/campeonatos/belgica/belga-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'Challenger Pro League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/belgica/belga2-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa da Bélgica',
          temporada: '2024/25',
          logo: 'assets/campeonatos/belgica/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'bolivia',
      nome: 'Bolívia',
      bandeira: 'assets/bolivia-band.png',
      ligas: [
        {
          nome: 'Division Profesional',
          temporada: '2024/25',
          logo: 'assets/campeonatos/bolivia/bolivia-liga1-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa Paceña',
          temporada: '2024/25',
          logo: 'assets/campeonatos/bolivia/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'brasil',
      nome: 'Brasil',
      bandeira: 'assets/brasil-band.png',
      ligas: [
        {
          nome: 'Brasileirão Série A',
          temporada: '2024/25',
          logo: 'assets/campeonatos/brasil/brasileiro-serieA-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'Brasileirão Série B',
          temporada: '2024/25',
          logo: 'assets/campeonatos/brasil/brasileiro-serieB-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa do Brasil',
          temporada: '2024/25',
          logo: 'assets/campeonatos/brasil/copa-brasil-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'chile',
      nome: 'Chile',
      bandeira: 'assets/chile-band.png',
      ligas: [
        {
          nome: 'Liga de Primera',
          temporada: '2024/25',
          logo: 'assets/campeonatos/chile/liga-primera-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'Liga de Acesso',
          temporada: '2024/25',
          logo: 'assets/campeonatos/chile/liga-acesso-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa Chile',
          temporada: '2024/25',
          logo: 'assets/campeonatos/chile/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'china',
      nome: 'China',
      bandeira: 'assets/china-band.png',
      ligas: [
        {
          nome: 'Super Liga Chinesa',
          temporada: '2024/25',
          logo: 'assets/campeonatos/china/superliga-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'Liga Um',
          temporada: '2024/25',
          logo: 'assets/campeonatos/china/liga1-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa da China',
          temporada: '2024/25',
          logo: 'assets/campeonatos/china/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'colombia',
      nome: 'Colômbia',
      bandeira: 'assets/colombia-band.png',
      ligas: [
        {
          nome: 'Categoria Primera A',
          temporada: '2024/25',
          logo: 'assets/campeonatos/colombia/categoriaA-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa da Colômbia',
          temporada: '2024/25',
          logo: 'assets/campeonatos/colombia/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'coreia-do-sul',
      nome: 'Coreia do Sul',
      bandeira: 'assets/coreiadosul-band.png',
      ligas: [
        {
          nome: 'K League 1',
          temporada: '2024/25',
          logo: 'assets/campeonatos/coreiadosul/k1-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'K League 2',
          temporada: '2024/25',
          logo: 'assets/campeonatos/coreiadosul/k2-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [],
    },
    {
      slug: 'croacia',
      nome: 'Croácia',
      bandeira: 'assets/croacia-band.png',
      ligas: [
        {
          nome: 'MAXtv Prva Liga',
          temporada: '2024/25',
          logo: 'assets/campeonatos/croacia/max-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [],
    },
    {
      slug: 'dinamarca',
      nome: 'Dinamarca',
      bandeira: 'assets/dinamarca-band.png',
      ligas: [
        {
          nome: 'Super Liga',
          temporada: '2024/25',
          logo: 'assets/campeonatos/dinamarca/superliga-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: '1° Divisão',
          temporada: '2024/25',
          logo: 'assets/campeonatos/dinamarca/divisao1-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa Landspokal',
          temporada: '2024/25',
          logo: 'assets/campeonatos/dinamarca/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'egito',
      nome: 'Egito',
      bandeira: 'assets/egito-band.png',
      ligas: [
        {
          nome: 'Premier League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/egito/pl1-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa da Liga',
          temporada: '2024/25',
          logo: 'assets/campeonatos/egito/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'emirados-arabes-unidos',
      nome: 'Emirados Árabes Unidos',
      bandeira: 'assets/emiradosarabes-band.png',
      ligas: [
        {
          nome: 'UAE Pro League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/arabesunidos/uae-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [],
    },
    {
      slug: 'equador',
      nome: 'Equador',
      bandeira: 'assets/equador-band.png',
      ligas: [
        {
          nome: 'Liga Pro',
          temporada: '2024/25',
          logo: 'assets/campeonatos/equador/liga-pro-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa Ecuador',
          temporada: '2024/25',
          logo: 'assets/campeonatos/equador/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'escocia',
      nome: 'Escócia',
      bandeira: 'assets/escocia-band.png',
      ligas: [
        {
          nome: 'Premiership League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/escocia/premiership-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa Challenge',
          temporada: '2024/25',
          logo: 'assets/campeonatos/escocia/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'espanha',
      nome: 'Espanha',
      bandeira: 'assets/espanha-band.png',
      ligas: [
        {
          nome: 'La Liga',
          temporada: '2024/25',
          logo: 'assets/campeonatos/espanha/laliga-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'La Liga Hypermotion',
          temporada: '2024/25',
          logo: 'assets/campeonatos/espanha/laliga2-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa do Rei',
          temporada: '2024/25',
          logo: 'assets/campeonatos/espanha/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'estados-unidos',
      nome: 'Estados Unidos da América',
      bandeira: 'assets/eua-band.png',
      ligas: [
        {
          nome: 'Major League Soccer - MLS - Conferência Leste',
          temporada: '2024/25',
          logo: 'assets/campeonatos/eua/mls-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'Major League Soccer - MLS - Conferência Oeste',
          temporada: '2024/25',
          logo: 'assets/campeonatos/eua/mls-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'USL Championship - Conferência Leste',
          temporada: '2024/25',
          logo: 'assets/campeonatos/eua/usl-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'USL Championship - Conferência Oeste',
          temporada: '2024/25',
          logo: 'assets/campeonatos/eua/usl-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'U.S Open Cup',
          temporada: '2024/25',
          logo: 'assets/campeonatos/eua/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'franca',
      nome: 'França',
      bandeira: 'assets/franca-band.png',
      ligas: [
        {
          nome: 'Ligue 1',
          temporada: '2024/25',
          logo: 'assets/campeonatos/franca/ligue1-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'Ligue 2',
          temporada: '2024/25',
          logo: 'assets/campeonatos/franca/ligue2-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Coupe de France',
          temporada: '2024/25',
          logo: 'assets/campeonatos/franca/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'grecia',
      nome: 'Grécia',
      bandeira: 'assets/grecia-band.png',
      ligas: [
        {
          nome: 'Super League Greece',
          temporada: '2024/25',
          logo: 'assets/campeonatos/grecia/sleague-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Greek Cup',
          temporada: '2024/25',
          logo: 'assets/campeonatos/grecia/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'inglaterra',
      nome: 'Iglaterra',
      bandeira: 'assets/inglaterra-band.png',
      ligas: [
        {
          nome: 'Premier League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/inglaterra/premier-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'EFL Championship',
          temporada: '2024/25',
          logo: 'assets/campeonatos/inglaterra/efl-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'FA Cup',
          temporada: '2024/25',
          logo: 'assets/campeonatos/inglaterra/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'italia',
      nome: 'Itália',
      bandeira: 'assets/italia-band.png',
      ligas: [
        {
          nome: 'Serie A - Tim',
          temporada: '2024/25',
          logo: 'assets/campeonatos/italia/seriea-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'Serie B',
          temporada: '2024/25',
          logo: 'assets/campeonatos/italia/serieb-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Coppa Italia',
          temporada: '2024/25',
          logo: 'assets/campeonatos/italia/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'japao',
      nome: 'Japão',
      bandeira: 'assets/china-band.png',
      ligas: [
        {
          nome: 'J1 League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/japao/j1-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'J2 League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/japao/j2-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Emperor´s Cup',
          temporada: '2024/25',
          logo: 'assets/campeonatos/japao/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'marrocos',
      nome: 'Marrocos',
      bandeira: 'assets/marrocos-band.png',
      ligas: [
        {
          nome: 'Botola Pro',
          temporada: '2024/25',
          logo: 'assets/campeonatos/marrocos/botola-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [],
    },
    {
      slug: 'mexico',
      nome: 'México',
      bandeira: 'assets/mexico-band.png',
      ligas: [
        {
          nome: 'Liga MX',
          temporada: '2024/25',
          logo: 'assets/campeonatos/mexico/mx-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'Liga MX Expansion',
          temporada: '2024/25',
          logo: 'assets/campeonatos/mexico/mx-expansion-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa MX',
          temporada: '2024/25',
          logo: 'assets/campeonatos/mexico/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'paises-baixos',
      nome: 'Paises Baixos',
      bandeira: 'assets/holanda-band.png',
      ligas: [
        {
          nome: 'Eredivisie',
          temporada: '2024/25',
          logo: 'assets/campeonatos/holanda/eredivisie-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'Erste Divisie',
          temporada: '2024/25',
          logo: 'assets/campeonatos/holanda/2divisao-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'KNVB Beker',
          temporada: '2024/25',
          logo: 'assets/campeonatos/holanda/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'paraguai',
      nome: 'Paraguai',
      bandeira: 'assets/paraguai-band.png',
      ligas: [
        {
          nome: 'Primera División Paraguay',
          temporada: '2024/25',
          logo: 'assets/campeonatos/paraguai/primera-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'División Intermedia',
          temporada: '2024/25',
          logo: 'assets/campeonatos/paraguai/intermedia-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa Paraguay',
          temporada: '2024/25',
          logo: 'assets/campeonatos/paraguai/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'peru',
      nome: 'Peru',
      bandeira: 'assets/peru-band.png',
      ligas: [
        {
          nome: 'Liga 1',
          temporada: '2024/25',
          logo: 'assets/campeonatos/peru/liga1-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa Bicentenário',
          temporada: '2024/25',
          logo: 'assets/campeonatos/peru/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'portugal',
      nome: 'Portugal',
      bandeira: 'assets/portugal-band.png',
      ligas: [
        {
          nome: 'Primeira Liga',
          temporada: '2024/25',
          logo: 'assets/campeonatos/portugal/primeira-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'Segunda Liga',
          temporada: '2024/25',
          logo: 'assets/campeonatos/portugal/segunda-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Taça de Portugal',
          temporada: '2024/25',
          logo: 'assets/campeonatos/portugal/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'qatar',
      nome: 'Qatar',
      bandeira: 'assets/qatar-band.png',
      ligas: [
        {
          nome: 'Qatar Stars League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/qatar/stars-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [],
    },
    {
      slug: 'russia',
      nome: 'Russia',
      bandeira: 'assets/russia-band.png',
      ligas: [
        {
          nome: 'Russian Premier League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/russia/russian-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Russian Cup',
          temporada: '2024/25',
          logo: 'assets/campeonatos/russia/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'suica',
      nome: 'Suiça',
      bandeira: 'assets/suica-band.png',
      ligas: [
        {
          nome: 'Swiss Super League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/suica/swiss-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [],
    },
    {
      slug: 'tunisia',
      nome: 'Tunísia',
      bandeira: 'assets/tunisia-band.png',
      ligas: [
        {
          nome: 'Ligue 1',
          temporada: '2024/25',
          logo: 'assets/campeonatos/tunisia/ligue1-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [],
    },
    {
      slug: 'turquia',
      nome: 'Turquia',
      bandeira: 'assets/turquia-band.png',
      ligas: [
        {
          nome: 'Süper Lig',
          temporada: '2024/25',
          logo: 'assets/campeonatos/turquia/super-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Turkish Cup',
          temporada: '2024/25',
          logo: 'assets/campeonatos/turquia/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'ucrania',
      nome: 'Ucrânia',
      bandeira: 'assets/ucrania-band.png',
      ligas: [
        {
          nome: 'Ukrainian Premier League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/ucrania/liga1-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Ukrainian Cup',
          temporada: '2024/25',
          logo: 'assets/campeonatos/ucrania/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'uruguai',
      nome: 'Uruguai',
      bandeira: 'assets/uruguai-band.png',
      ligas: [
        {
          nome: 'Primera Division Uruguaya',
          temporada: '2024/25',
          logo: 'assets/campeonatos/uruguai/primera-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa AUF Uruguay',
          temporada: '2024/25',
          logo: 'assets/campeonatos/uruguai/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'venezuela',
      nome: 'Venezuela',
      bandeira: 'assets/venezuela-band.png',
      ligas: [
        {
          nome: 'Primera División Venezolana',
          temporada: '2024/25',
          logo: 'assets/campeonatos/venezuela/primera-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [
        {
          nome: 'Copa Venezuela',
          temporada: '2024/25',
          logo: 'assets/campeonatos/venezuela/copa-logo.png',
          favorito: false,
          tipo: 'copa',
        },
      ],
    },
    {
      slug: 'internacional',
      nome: 'Competições Internacionais',
      bandeira: 'assets/internacional-band.png',
      ligas: [
        {
          nome: 'UEFA Champions League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/Internacional/champions-logo.png',
          favorito: false,
          tipo: 'liga',
        },
        {
          nome: 'UEFA Europa League',
          temporada: '2024/25',
          logo: 'assets/campeonatos/Internacional/europa-logo.png',
          favorito: false,
          tipo: 'liga',
        },
      ],
      copas: [],
    },
  ];

  private readonly ligaSlugPorPaisENome: {
    [paisSlug: string]: { [nomeLiga: string]: string };
  } = {
    alemanha: {
      Bundesliga: 'bundesliga',
      '2. Bundesliga': 'bundesliga2',
      '3. Liga': 'liga3',
    },
    'arabia-saudita': {
      'Liga Profissional Saudita': 'ligaSaudita',
      'Liga da Primeira Divisão Saudita': 'ligaSauditaB',
    },
    argentina: {
      'Campeonato Argentino de Futebol': 'argentino',
      'Primeira Nacional': 'argentinoB',
    },
    australia: {
      'A League': 'australiano',
    },
    belgica: {
      'Liga Jupiler': 'campBelgaA',
      'Challenger Pro League': 'campBelgaB',
    },
    bolivia: {
      'Division Profesional': 'boliviano',
    },
    brasil: {
      'Brasileirão Série A': 'brasileiraoA',
      'Brasileirão Série B': 'brasileiraoB',
    },
    chile: {
      'Liga de Primera': 'campChilenoA',
      'Liga de Acesso': 'campChilenoB',
    },
    china: {
      'Super Liga Chinesa': 'superLiga',
      'Liga Um': 'ligaUm',
    },
    colombia: {
      'Categoria Primera A': 'colombiano',
    },
    'coreia-do-sul': {
      'K League 1': 'coreiaK1',
      'K League 2': 'coreiaK2',
    },
    croacia: {
      'MAXtv Prva Liga': 'croata',
    },
    dinamarca: {
      'Super Liga': 'dinamarques1',
      '1° Divisão': 'dinamarques2',
    },
    egito: {
      'Premier League': 'egipcio',
    },
    'emirados-arabes-unidos': {
      'UAE Pro League': 'uae',
    },
    equador: {
      'Liga Pro': 'equatoriano',
    },
    escocia: {
      'Premiership League': 'escocia',
    },
    espanha: {
      'La Liga': 'espanhol1',
      'La Liga Hypermotion': 'espanhol2',
    },
    'estados-unidos': {
      'Major League Soccer - MLS - Conferência Oeste': 'mlso',
      'Major League Soccer - MLS - Conferência Leste': 'mlsl',
      'USL Championship - Conferência Oeste': 'uslo',
      'USL Championship - Conferência Leste': 'usll',
    },
    franca: {
      'Ligue 1': 'ligue1',
      'Ligue 2': 'ligue2',
    },
    grecia: {
      'Super League Greece': 'grego',
    },
    inglaterra: {
      'Premier League': 'ingles1',
      'EFL Championship': 'ingles2',
    },
    italia: {
      'Serie A - Tim': 'italiano1',
      'Serie B': 'italiano2',
    },
    japao: {
      'J1 League': 'japones1',
      'J2 League': 'japones2',
    },
    marrocos: {
      'Botola Pro': 'marroquino',
    },
    mexico: {
      'Liga MX': 'mexicano1',
      'Liga MX Expansion': 'mexicano2',
    },
    'paises-baixos': {
      Eredivisie: 'holandes1',
      'Erste Divisie': 'holandes2',
    },
    paraguai: {
      'Primera División Paraguay': 'paraguaio1',
      'División Intermedia': 'paraguaio2',
    },
    peru: {
      'Liga 1': 'peruano',
    },
    portugal: {
      'Primeira Liga': 'portugues1',
      'Segunda Liga': 'portugues2',
    },
    qatar: {
      'Qatar Stars League': 'stars',
    },
    russia: {
      'Russian Premier League': 'russo',
    },
    suica: {
      'Swiss Super League': 'suico',
    },
    tunisia: {
      'Ligue 1': 'campLeague',
    },
    turquia: {
      'Süper Lig': 'turco',
    },
    ucrania: {
      'Ukrainian Premier League': 'ucraniano',
    },
    uruguai: {
      'Primera Division Uruguaya': 'uruguaio',
    },
    venezuela: {
      'Primera División Venezolana': 'venezuelano',
    },
  };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    const slug = this.route.snapshot.paramMap.get('slug') ?? '';

    this.pais =
      this.paisesDetalhes.find((p) => p.slug === slug.toLowerCase()) ??
      this.paisesDetalhes[0];
  }

  voltar(): void {
    this.router.navigate(['/home'], {
      state: { aba: 'campeonatos' },
    });
  }

  irParaHome(): void {
    this.router.navigate(['/home'], {
      state: { aba: 'jogos' },
    });
  }

  selecionarAba(aba: 'ligas' | 'copas'): void {
    this.abaAtiva = aba;
  }

  alternarFavorito(competicao: Competicao): void {
    competicao.favorito = !competicao.favorito;
  }

  get ligasFiltradas(): Competicao[] {
    if (!this.pais) return [];
    const termo = this.termoBusca.trim().toLowerCase();
    if (!termo) return this.pais.ligas;
    return this.pais.ligas.filter((l) =>
      l.nome.toLowerCase().includes(termo),
    );
  }

  get copasFiltradas(): Competicao[] {
    if (!this.pais) return [];
    const termo = this.termoBusca.trim().toLowerCase();
    if (!termo) return this.pais.copas;
    return this.pais.copas.filter((c) =>
      c.nome.toLowerCase().includes(termo),
    );
  }

  abrirLiga(competicao: Competicao): void {
    if (!this.pais) {
      return;
    }

    const mapaLigas = this.ligaSlugPorPaisENome[this.pais.slug];
    if (!mapaLigas) {
      console.warn(`Nenhum mapeamento de ligas para o país ${this.pais.slug}`);
      return;
    }

    const slugLiga = mapaLigas[competicao.nome];
    if (!slugLiga) {
      console.warn(
        `Nenhum slug configurado para a liga "${competicao.nome}" (${this.pais.slug})`,
      );
      return;
    }

    this.router.navigate(['/ligas', slugLiga], {
      state: { nomeLiga: competicao.nome },
    });
  }
}
