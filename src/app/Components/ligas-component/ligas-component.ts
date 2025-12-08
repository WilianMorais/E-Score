import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface equipesDados {
  slug: string;
  nome: string;
  campeonato: string;  
  escudo: string;
  equipeFav: boolean;
}

@Component({
  selector: 'app-ligas-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ligas-component.html',
  styleUrl: './ligas-component.scss',
})
export class LigasComponent implements OnInit {
  time?: equipesDados;

  abaAtiva: 'equipe' = 'equipe';
  buscaEquipe = '';

  ligaSlug = '';
  ligaNome = '';

  private readonly nomesLigas: { [slug: string]: string } = {
    bundesliga: 'Bundesliga',
    bundesliga2: '2.Bundesliga',
    liga3: '3. Liga',
    ligaSaudita: 'Liga Profissional Saudita',
    ligaSauditaB: 'Liga da Primeira Divisão Saudita',
    argentino: 'Campeonato Argentino de Futebol',
    argentinoB: 'Primeira Nacional',
    australiano: 'A League',
    campBelgaA: 'Liga Jupiler',
    campBelgaB: 'Challenger Pro League',
    boliviano: 'Division Profesional',
    brasileiraoA: 'Brasileirão Série A',
    brasileiraoB: 'Brasileirão Série B',
    campChilenoA: 'Liga de Primera',
    campChilenoB: 'Liga de Acesso',
    superLiga: 'Super Liga Chinesa',
    ligaUm: 'Liga Um',
    colombiano: 'Categora Primera A',
    coreiaK1: 'K League 1',
    coreiaK2: 'K League 2',
    croata: 'MAXtv Prva Liga',
    dinamarques1: 'Super Liga',
    dinamarques2: '1° Divisão',
    egipcio: 'Premier League',
    uae: 'UAE Pro League',
    equatoriano: 'Liga Pro',
    escocia: 'Premiership League',
    espanhol1: 'La Liga',
    espanhol2: 'La Liga Hypermotion',
    mls: 'Major League Soccer - MLS',
    usl: 'USL Championship',
    ligue1: 'Ligue 1',
    ligue2: 'Ligue 2',
    grego: 'Super League Greece',
    ingles1: 'Premier League',
    ingles2: 'EFL Championship',
    italiano1: 'Serie A - Tim',
    italiano2: 'Serie B',
    japones1: 'J1 League',
    japones2: 'J2 League',
    marroquino: 'Botola Pro',
    mexicano1: 'Liga MX',
    mexicano2: 'Liga MX Expansion',
    holandes1: 'Eredivisie',
    holandes2: 'Erste Divisie',
    paraguaio1: 'Primera División Paraguay',
    paraguaio2: 'División Intermedia',
    peruano: 'Liga 1',
    portugues1: 'Primeira Liga',
    portugues2: 'Segunda Liga',
    stars: 'Qatar Stars League',
    russo: 'Russian Prmier League',
    suico: 'Swiss Super League',
    campLeague: 'Ligue 1',
    turco: 'Super Lig',
    ucraniano: 'Ukrainin Premier League',
    uruguaio: 'Primera Division Uruguaya',
    venezuelano: 'Primera División Venezolana',
  };


  private readonly dadosEquipes: equipesDados[] = [
    //Brasileirão Série A//
    { nome:'Chapecoense',           slug:'acf',    escudo:'assets/campeonatos/brasil/equipes/chape.png',       equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Santos',                slug:'sfc',    escudo:'assets/campeonatos/brasil/equipes/santos.png',      equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'São Paulo',             slug:'spfc',   escudo:'assets/campeonatos/brasil/equipes/spaulo.png',      equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Remo',                  slug:'remo',   escudo:'assets/campeonatos/brasil/equipes/remo.png',        equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Athletico Paranaense',  slug:'cap',    escudo:'assets/campeonatos/brasil/equipes/athPar.png',      equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Flamengo',              slug:'crf',    escudo:'assets/campeonatos/brasil/equipes/flamengo.png',    equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Palmeiras',             slug:'sep',    escudo:'assets/campeonatos/brasil/equipes/palmeiras.png',   equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Cruzerio',              slug:'cru',    escudo:'assets/campeonatos/brasil/equipes/cruzeiro.png',    equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Mirassol',              slug:'mfc',    escudo:'assets/campeonatos/brasil/equipes/mirassol.png',    equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Fluminense',            slug:'flu',    escudo:'assets/campeonatos/brasil/equipes/fluminense.png',  equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Bahia',                 slug:'bah',    escudo:'assets/campeonatos/brasil/equipes/bahia.png',       equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Botafogo',              slug:'bot',    escudo:'assets/campeonatos/brasil/equipes/botafogo.png',    equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'RB Bragantino',         slug:'rbb',    escudo:'assets/campeonatos/brasil/equipes/bragantino.png',  equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Corinthians',           slug:'cor',    escudo:'assets/campeonatos/brasil/equipes/corinthians.png', equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Atlético Mineiro',      slug:'cam',    escudo:'assets/campeonatos/brasil/equipes/atlmin.png',      equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Fortaleza',             slug:'for',    escudo:'assets/campeonatos/brasil/equipes/fortaleza.png',   equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Vasco',                 slug:'crv',    escudo:'assets/campeonatos/brasil/equipes/vasco.png',       equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Vitória',               slug:'vit',    escudo:'assets/campeonatos/brasil/equipes/vitoria.png',     equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Coritiba',              slug:'cfc',    escudo:'assets/campeonatos/brasil/equipes/coxa.png',        equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Internacional',         slug:'sci',    escudo:'assets/campeonatos/brasil/equipes/inter.png',       equipeFav:false,  campeonato:'brasileiraoA' },

    //Botola Pro
    { nome:'Wydad AC',              slug:'wyd',    escudo:'assets/campeonatos/marrocos/equipes/wydad.png',     equipeFav:false,  campeonato:'marroquino'   },
    { nome:'AS FAR',                slug:'far',    escudo:'assets/campeonatos/marrocos/equipes/asfar.png',     equipeFav:false,  campeonato:'marroquino'   },
    { nome:'Maghreb Fès',           slug:'mag',    escudo:'assets/campeonatos/marrocos/equipes/maghred.png',   equipeFav:false,  campeonato:'marroquino'   },
    { nome:'Raja Casablanca',       slug:'raj',    escudo:'assets/campeonatos/marrocos/equipes/raja.png',      equipeFav:false,  campeonato:'marroquino'   },
    { nome:'CODM Meknes',           slug:'cod',    escudo:'assets/campeonatos/marrocos/equipes/codm.png',      equipeFav:false,  campeonato:'marroquino'   },
    { nome:'RSB',                   slug:'rsb',    escudo:'assets/campeonatos/marrocos/equipes/rsb.png',       equipeFav:false,  campeonato:'marroquino'   },
    { nome:'Olympique Dcheira',     slug:'oly',    escudo:'assets/campeonatos/marrocos/equipes/olympique.png', equipeFav:false,  campeonato:'marroquino'   },
    { nome:'El Jadida',             slug:'elj',    escudo:'assets/campeonatos/marrocos/equipes/jadida.png',    equipeFav:false,  campeonato:'marroquino'   },
    { nome:'Ittihad Tanger',        slug:'itt',    escudo:'assets/campeonatos/marrocos/equipes/ittihad.png',   equipeFav:false,  campeonato:'marroquino'   },
    { nome:'CR Khemis Zemamra',     slug:'crk',    escudo:'assets/campeonatos/marrocos/equipes/khemis.png',    equipeFav:false,  campeonato:'marroquino'   },
    { nome:'Hassania Agadir',       slug:'has',    escudo:'assets/campeonatos/marrocos/equipes/hassana.png',   equipeFav:false,  campeonato:'marroquino'   },
    { nome:'Kawkab Marrakech',      slug:'kwm',    escudo:'assets/campeonatos/marrocos/equipes/kawkab.png',    equipeFav:false,  campeonato:'marroquino'   },
    { nome:'FUS Rabat',             slug:'fus',    escudo:'assets/campeonatos/marrocos/equipes/rabat.png',     equipeFav:false,  campeonato:'marroquino'   },
    { nome:'Union Yacoub El Mansour',slug:'uym',   escudo:'assets/campeonatos/marrocos/equipes/mansour.png',   equipeFav:false,  campeonato:'marroquino'   },
    { nome:'US Touarga',            slug:'ust',    escudo:'assets/campeonatos/marrocos/equipes/touarga.png',   equipeFav:false,  campeonato:'marroquino'   },
    { nome:'Olympique Safi',        slug:'osa',    escudo:'assets/campeonatos/marrocos/equipes/safi.png',      equipeFav:false,  campeonato:'marroquino'   },
  ];

  equipesLiga: equipesDados[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.ligaSlug = params.get('slug') ?? '';
      this.carregarEquipesDaLiga();

      if (!this.ligaNome) {
        this.ligaNome = this.nomesLigas[this.ligaSlug] ?? this.ligaSlug;
      }
    });

    const nav = this.router.getCurrentNavigation();
    const state = (nav?.extras?.state || {}) as { nomeLiga?: string };

    if (state.nomeLiga) {
      this.ligaNome = state.nomeLiga;
    }
  }

  get equipesFiltradas(): equipesDados[] {
    const texto = this.normalizar(this.buscaEquipe);

    return this.equipesLiga.filter((equipe) => {
      if (!texto) return true;
      return this.normalizar(equipe.nome).includes(texto);
    });
  }

  private carregarEquipesDaLiga(): void {
    this.equipesLiga = this.dadosEquipes.filter(
      (equipe) => equipe.campeonato === this.ligaSlug
    );
  }

  onEsporteAlterado(esporte: string): void {
    console.log('Esporte selecionado:', esporte);
  }

  voltar(): void {
    this.router.navigate(['/home'], {
      state: { aba: 'campeonatos' },
    });
  }

  private normalizar(valor: string): string {
    return valor
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }
}
