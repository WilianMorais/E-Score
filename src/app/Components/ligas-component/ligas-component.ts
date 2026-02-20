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
    mlso: 'Major League Soccer - MLS - Conferência Oeste',
    mlsl: 'Major League Soccer - MLS - Conferência Leste',
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
    //Brasileirão Série A
    { nome:'Chapecoense',           slug:'acf',    escudo:'assets/campeonatos/brasil/equipes/chape.png',       equipeFav:false,  campeonato:'brasileiraoA' },
    { nome:'Grêmio',                slug:'gre',    escudo:'assets/campeonatos/brasil/equipes/gremio.png',      equipeFav:false,  campeonato:'brasileiraoA' },
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
    
    //Brasileirão Série B
    { nome:'Criciúma',              slug:'cri',    escudo:'assets/campeonatos/brasil/equipes/criciuma.png',    equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Goiás',                 slug:'goi',    escudo:'assets/campeonatos/brasil/equipes/goias.png',       equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Novorizontino',         slug:'nov',    escudo:'assets/campeonatos/brasil/equipes/novorizontino.png',equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'CRB',                   slug:'crb',    escudo:'assets/campeonatos/brasil/equipes/crb.png',         equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Avaí',                  slug:'ava',    escudo:'assets/campeonatos/brasil/equipes/avai.png',        equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Cuiabá',                slug:'cui',    escudo:'assets/campeonatos/brasil/equipes/cuiaba.png',      equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Atlético Goianiense',   slug:'acg',    escudo:'assets/campeonatos/brasil/equipes/atleticogo.png',  equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Operario',              slug:'ope',    escudo:'assets/campeonatos/brasil/equipes/operario.png',    equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Vila Nova',             slug:'vil',    escudo:'assets/campeonatos/brasil/equipes/vila.png',        equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'América Mineiro',       slug:'amg',    escudo:'assets/campeonatos/brasil/equipes/america.png',     equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Athletic Club',         slug:'atc',    escudo:'assets/campeonatos/brasil/equipes/athletic.png',    equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Botafogo SP',           slug:'btf',    escudo:'assets/campeonatos/brasil/equipes/botafogo.png',    equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Ceará',                 slug:'cea',    escudo:'assets/campeonatos/brasil/equipes/ceara.png',       equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Fortaleza',             slug:'for',    escudo:'assets/campeonatos/brasil/equipes/fortaleza.png',   equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Juventude',             slug:'juv',    escudo:'assets/campeonatos/brasil/equipes/juventude.png',   equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Sport Recife',          slug:'spo',    escudo:'assets/campeonatos/brasil/equipes/sport.png',       equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Ponte Preta',           slug:'pon',    escudo:'assets/campeonatos/brasil/equipes/ponte.png',       equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'São Bernardo',          slug:'sbo',    escudo:'assets/campeonatos/brasil/equipes/saobernardo.png', equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Londrina',              slug:'lon',    escudo:'assets/campeonatos/brasil/equipes/londrina.png',    equipeFav:false,  campeonato:'brasileiraoB' },
    { nome:'Náutico',               slug:'nau',    escudo:'assets/campeonatos/brasil/equipes/nautico.png',     equipeFav:false,  campeonato:'brasileiraoB' },
    
    //Premier League - Egito
    { nome:'Ceramica Cleopatra',    slug:'cec',    escudo:'assets/campeonatos/egito/equipes/ceramica.png',     equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Pyramids',              slug:'pyr',    escudo:'assets/campeonatos/egito/equipes/pyramids.png',     equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Al Ahly SC',            slug:'aas',    escudo:'assets/campeonatos/egito/equipes/ahly.png',         equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Zamalek SC',            slug:'zam',    escudo:'assets/campeonatos/egito/equipes/zamalek.png',      equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Al Masry',              slug:'ama',    escudo:'assets/campeonatos/egito/equipes/masry.png',        equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Wadi Degla',            slug:'wad',    escudo:'assets/campeonatos/egito/equipes/degla.png',        equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Zed FC',                slug:'zfc',    escudo:'assets/campeonatos/egito/equipes/zed.png',          equipeFav:false,  campeonato:'egipcio'      },
    { nome:'ENPPI',                 slug:'enp',    escudo:'assets/campeonatos/egito/equipes/enppi.png',        equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Petrojet',              slug:'pet',    escudo:'assets/campeonatos/egito/equipes/petrojet.png',     equipeFav:false,  campeonato:'egipcio'      },
    { nome:'El Gouna',              slug:'elg',    escudo:'assets/campeonatos/egito/equipes/gouna.png',        equipeFav:false,  campeonato:'egipcio'      },
    { nome:'National Bank Of Egypt',slug:'nbe',    escudo:'assets/campeonatos/egito/equipes/national.png',     equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Modern Sport FC',       slug:'mod',    escudo:'assets/campeonatos/egito/equipes/modern.png',       equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Ghazi El-Mehalla',      slug:'gha',    escudo:'assets/campeonatos/egito/equipes/ghazi.png',        equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Smouha',                slug:'smo',    escudo:'assets/campeonatos/egito/equipes/smouha.png',       equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Haras El Hodoodo',      slug:'har',    escudo:'assets/campeonatos/egito/equipes/hodoodo.png',      equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Pharco',                slug:'pha',    escudo:'assets/campeonatos/egito/equipes/pharco.png',       equipeFav:false,  campeonato:'egipcio'      },
    { nome:'El Geish',              slug:'elg',    escudo:'assets/campeonatos/egito/equipes/geish.png',        equipeFav:false,  campeonato:'egipcio'      },
    { nome:'AL Mokawloon',          slug:'alm',    escudo:'assets/campeonatos/egito/equipes/mokaw.png',        equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Ismaily',               slug:'ism',    escudo:'assets/campeonatos/egito/equipes/ismaily.png',      equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Al Ittihad',            slug:'ali',    escudo:'assets/campeonatos/egito/equipes/ittihad.png',      equipeFav:false,  campeonato:'egipcio'      },
    { nome:'Kahrbaa Alasmalia',     slug:'kah',    escudo:'assets/campeonatos/egito/equipes/kahrbaa.png',      equipeFav:false,  campeonato:'egipcio'      },

    //Ligue 1 - Tunisia
    { nome:'Espérance',             slug:'esp',    escudo:'assets/campeonatos/tunisia/equipes/esperance.png',  equipeFav:false,  campeonato:'campLeague'   },
    { nome:'Club Africain',         slug:'afr',    escudo:'assets/campeonatos/tunisia/equipes/africain.png',   equipeFav:false,  campeonato:'campLeague'   },
    { nome:'Stade Tunisien',        slug:'sta',    escudo:'assets/campeonatos/tunisia/equipes/stade.png',      equipeFav:false,  campeonato:'campLeague'   },
    { nome:'Sfaxien',               slug:'sfa',    escudo:'assets/campeonatos/tunisia/equipes/sfaxien.png',    equipeFav:false,  campeonato:'campLeague'   },
    { nome:'US Monastir',           slug:'usm',    escudo:'assets/campeonatos/tunisia/equipes/us.png',         equipeFav:false,  campeonato:'campLeague'   },
    { nome:'Zarzis',                slug:'zar',    escudo:'assets/campeonatos/tunisia/equipes/zarzis.png',     equipeFav:false,  campeonato:'campLeague'   },
    { nome:'ES Métlaoui',           slug:'esm',    escudo:'assets/campeonatos/tunisia/equipes/es.png',         equipeFav:false,  campeonato:'campLeague'   },
    { nome:'ES Sahel',              slug:'ess',    escudo:'assets/campeonatos/tunisia/equipes/sahel.png',      equipeFav:false,  campeonato:'campLeague'   },
    { nome:'AS Marsa',              slug:'asm',    escudo:'assets/campeonatos/tunisia/equipes/marsa.png',      equipeFav:false,  campeonato:'campLeague'   },
    { nome:'US Ben Guerdane',       slug:'usb',    escudo:'assets/campeonatos/tunisia/equipes/guerdane.png',   equipeFav:false,  campeonato:'campLeague'   },
    { nome:'JS Omrane',             slug:'jso',    escudo:'assets/campeonatos/tunisia/equipes/omrane.png',     equipeFav:false,  campeonato:'campLeague'   },
    { nome:'Bizertin',              slug:'biz',    escudo:'assets/campeonatos/tunisia/equipes/bizertin.png',   equipeFav:false,  campeonato:'campLeague'   },
    { nome:'Kairouan',              slug:'kai',    escudo:'assets/campeonatos/tunisia/equipes/kairouan.png',   equipeFav:false,  campeonato:'campLeague'   },
    { nome:'Soliman',               slug:'sol',    escudo:'assets/campeonatos/tunisia/equipes/soliman.png',    equipeFav:false,  campeonato:'campLeague'   },
    { nome:'Olimpique Béja',        slug:'olb',    escudo:'assets/campeonatos/tunisia/equipes/beja.png',       equipeFav:false,  campeonato:'campLeague'   },
    { nome:'AS Gabés',              slug:'asg',    escudo:'assets/campeonatos/tunisia/equipes/gabes.png',      equipeFav:false,  campeonato:'campLeague'   },

    //Liga MX
    { nome:'Toluca',                slug:'tol',    escudo:'assets/campeonatos/mexico/equipes/toluca.png',      equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Tigres',                slug:'tig',    escudo:'assets/campeonatos/mexico/equipes/tigres.png',      equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Cruz Azul',             slug:'cla',    escudo:'assets/campeonatos/mexico/equipes/cruz.png',        equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Club América',          slug:'clm',    escudo:'assets/campeonatos/mexico/equipes/club.png',        equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Monterrey',             slug:'mon',    escudo:'assets/campeonatos/mexico/equipes/monterrey.png',   equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Chivas',                slug:'chi',    escudo:'assets/campeonatos/mexico/equipes/chivas.png',      equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Club Tijuana',          slug:'cti',    escudo:'assets/campeonatos/mexico/equipes/tijuana.png',     equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Juarez',                slug:'jua',    escudo:'assets/campeonatos/mexico/equipes/juarez.png',      equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Pachuca',               slug:'pac',    escudo:'assets/campeonatos/mexico/equipes/pachuca.png',     equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Pumas',                 slug:'pum',    escudo:'assets/campeonatos/mexico/equipes/pumas.png',       equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Santos Laguna',         slug:'sla',    escudo:'assets/campeonatos/mexico/equipes/santos.png',      equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Queretaro',             slug:'que',    escudo:'assets/campeonatos/mexico/equipes/queretaro.png',   equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Necaxa',                slug:'nec',    escudo:'assets/campeonatos/mexico/equipes/necaxa.png',      equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Atlas',                 slug:'atl',    escudo:'assets/campeonatos/mexico/equipes/atlas.png',       equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Atlético San Luis',     slug:'asl',    escudo:'assets/campeonatos/mexico/equipes/atletico.png',    equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Mazatlan FC',           slug:'maz',    escudo:'assets/campeonatos/mexico/equipes/mazatlan.png',    equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Leon',                  slug:'leo',    escudo:'assets/campeonatos/mexico/equipes/leon.png',        equipeFav:false,  campeonato:'mexicano1'    },
    { nome:'Puebla',                slug:'pue',    escudo:'assets/campeonatos/mexico/equipes/puebla.png',      equipeFav:false,  campeonato:'mexicano1'    },

    //Liga MX Expansion
    { nome:'Atlante',               slug:'atl',    escudo:'assets/campeonatos/mexico/equipes/atlante.png',     equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Cancún FC',             slug:'can',    escudo:'assets/campeonatos/mexico/equipes/cancun.png',      equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Jaiba Brava',           slug:'jai',    escudo:'assets/campeonatos/mexico/equipes/jaiba.png',       equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Irapuato',              slug:'ira',    escudo:'assets/campeonatos/mexico/equipes/irapuato.png',    equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Mineros De Zacatecas',  slug:'miz',    escudo:'assets/campeonatos/mexico/equipes/mineros.png',     equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Leones Negros',         slug:'len',    escudo:'assets/campeonatos/mexico/equipes/leones.png',      equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Atlético Morelia',      slug:'atm',    escudo:'assets/campeonatos/mexico/equipes/morelia.png',     equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Tepatitlán de Morelos', slug:'tem',    escudo:'assets/campeonatos/mexico/equipes/tepatitlan.png',  equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Venados',               slug:'ven',    escudo:'assets/campeonatos/mexico/equipes/venados.png',     equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Atletico La Paz',       slug:'atp',    escudo:'assets/campeonatos/mexico/equipes/lapaz.png',       equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'CD Tapatío',            slug:'cdt',    escudo:'assets/campeonatos/mexico/equipes/tepatio.png',     equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Tlaxcala',              slug:'tla',    escudo:'assets/campeonatos/mexico/equipes/tlaxcala.png',    equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Oaxaca',                slug:'oax',    escudo:'assets/campeonatos/mexico/equipes/oaxaca.png',      equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Correcaminos',          slug:'cor',    escudo:'assets/campeonatos/mexico/equipes/correcaminos.png',equipeFav:false,  campeonato:'mexicano2'    },
    { nome:'Dorados de Sinaloa',    slug:'dos',    escudo:'assets/campeonatos/mexico/equipes/dorados.png',     equipeFav:false,  campeonato:'mexicano2'    },

    //MLS - Leste
    { nome:'Philadelphia Union',    slug:'phi',    escudo:'assets/campeonatos/eua/equipes/philadelphia.png',   equipeFav:false,  campeonato:'mlsl'          },
    { nome:'Atlanta United',        slug:'atl',    escudo:'assets/campeonatos/eua/equipes/atlanta.png',        equipeFav:false,  campeonato:'mlsl'          },
    { nome:'Charlotte FC',          slug:'cha',    escudo:'assets/campeonatos/eua/equipes/charlotte.png',      equipeFav:false,  campeonato:'mlsl'          },
    { nome:'Chicago Fire',          slug:'chi',    escudo:'assets/campeonatos/eua/equipes/chicago.png',        equipeFav:false,  campeonato:'mlsl'          },
    { nome:'FC Cincinnati',         slug:'fcc',    escudo:'assets/campeonatos/eua/equipes/cincinnati.png',     equipeFav:false,  campeonato:'mlsl'          },
    { nome:'Columbus Crew',         slug:'coc',    escudo:'assets/campeonatos/eua/equipes/columbus.png',       equipeFav:false,  campeonato:'mlsl'          },
    { nome:'DC United',             slug:'dcu',    escudo:'assets/campeonatos/eua/equipes/dcunited.png',       equipeFav:false,  campeonato:'mlsl'          },
    { nome:'Inter Miami',           slug:'inm',    escudo:'assets/campeonatos/eua/equipes/intermiami.png',     equipeFav:false,  campeonato:'mlsl'          },
    { nome:'CF Montréal',           slug:'cfm',    escudo:'assets/campeonatos/eua/equipes/montreal.png',       equipeFav:false,  campeonato:'mlsl'          },
    { nome:'Nashville SC',          slug:'nsc',    escudo:'assets/campeonatos/eua/equipes/nashville.png',      equipeFav:false,  campeonato:'mlsl'          },
    { nome:'Revolution',            slug:'rev',    escudo:'assets/campeonatos/eua/equipes/revolution.png',     equipeFav:false,  campeonato:'mlsl'          },
    { nome:'New York City FC',      slug:'nyc',    escudo:'assets/campeonatos/eua/equipes/newyorkcity.png',    equipeFav:false,  campeonato:'mlsl'          },
    { nome:'N.Y Red Bull',          slug:'nrb',    escudo:'assets/campeonatos/eua/equipes/nyredbull.png',      equipeFav:false,  campeonato:'mlsl'          },
    { nome:'Orlando City',          slug:'orl',    escudo:'assets/campeonatos/eua/equipes/orlando.png',        equipeFav:false,  campeonato:'mlsl'          },
    { nome:'Toronto',               slug:'tor',    escudo:'assets/campeonatos/eua/equipes/toronto.png',        equipeFav:false,  campeonato:'mlsl'          },

    //MLS - Oeste
    { nome:'Austin FC',             slug:'aus',    escudo:'assets/campeonatos/eua/equipes/austin.png',         equipeFav:false,  campeonato:'mlso'          },
    { nome:'Colorado Rapids',       slug:'cor',    escudo:'assets/campeonatos/eua/equipes/colorado.png',       equipeFav:false,  campeonato:'mlso'          },
    { nome:'FC Dallas',             slug:'fcd',    escudo:'assets/campeonatos/eua/equipes/dallas.png',         equipeFav:false,  campeonato:'mlso'          },
    { nome:'Houston Dynamo',        slug:'hod',    escudo:'assets/campeonatos/eua/equipes/houston.png',        equipeFav:false,  campeonato:'mlso'          },
    { nome:'La Galaxy',             slug:'lag',    escudo:'assets/campeonatos/eua/equipes/lagalaxy.png',       equipeFav:false,  campeonato:'mlso'          },
    { nome:'Los Angeles FC',        slug:'lfc',    escudo:'assets/campeonatos/eua/equipes/lafc.png',           equipeFav:false,  campeonato:'mlso'          },
    { nome:'Minnesota United',      slug:'min',    escudo:'assets/campeonatos/eua/equipes/minnesota.png',      equipeFav:false,  campeonato:'mlso'          },
    { nome:'Portland',              slug:'por',    escudo:'assets/campeonatos/eua/equipes/portland.png',       equipeFav:false,  campeonato:'mlso'          },
    { nome:'Real Salt Lake',        slug:'rsl',    escudo:'assets/campeonatos/eua/equipes/reallake.png',       equipeFav:false,  campeonato:'mlso'          },
    { nome:'San Jose',              slug:'sjo',    escudo:'assets/campeonatos/eua/equipes/sanjose.png',        equipeFav:false,  campeonato:'mlso'          },
    { nome:'San Diego FC',          slug:'sdf',    escudo:'assets/campeonatos/eua/equipes/sandiego.png',       equipeFav:false,  campeonato:'mlso'          },
    { nome:'Seattle Sounders',      slug:'sso',    escudo:'assets/campeonatos/eua/equipes/seatle.png',         equipeFav:false,  campeonato:'mlso'          },
    { nome:'Sporting KC',           slug:'skc',    escudo:'assets/campeonatos/eua/equipes/sporting.png',       equipeFav:false,  campeonato:'mlso'          },
    { nome:'St. Louis City SC',     slug:'slc',    escudo:'assets/campeonatos/eua/equipes/louiscity.png',      equipeFav:false,  campeonato:'mlso'          },
    { nome:'Whitecaps',             slug:'whi',    escudo:'assets/campeonatos/eua/equipes/whitecaps.png',      equipeFav:false,  campeonato:'mlso'          },

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
