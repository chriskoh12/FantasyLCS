import { Injectable } from '@angular/core';
import { Player, Position, FantasyTeam } from './models/FantasyTeam';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  rosters: Player[][] = [
    [
      { name: 'Broken Blade', position: Position.top, team: 'TSM' },
      { name: 'Dardoch', position: Position.jng, team: 'TSM' },
      { name: 'Bjergsen', position: Position.mid, team: 'TSM' },
      { name: 'Kobbe', position: Position.adc, team: 'TSM' },
      { name: 'Biofrost', position: Position.sup, team: 'TSM' },
      null,
      { name: 'Team SoloMid', position: Position.team, team: 'TSM' }
    ],
    [
      { name: 'Dan Dan', position: Position.top, team: 'MSF' },
      { name: 'Razork', position: Position.jng, team: 'MSF' },
      { name: 'Febiven', position: Position.mid, team: 'MSF' },
      { name: 'Bvoy', position: Position.adc, team: 'MSF' },
      { name: 'Denyk', position: Position.sup, team: 'MSF' },
      null,
      { name: 'Misfits', position: Position.team, team: 'MSF' }
    ],
    [
      { name: 'Licorice', position: Position.top, team: 'C9' },
      { name: 'Blaber', position: Position.jng, team: 'C9' },
      { name: 'Nisqy', position: Position.mid, team: 'C9' },
      { name: 'Zven', position: Position.adc, team: 'C9' },
      { name: 'Vulcan', position: Position.sup, team: 'C9' },
      null,
      { name: 'Cloud 9', position: Position.team, team: 'C9' }
    ],
    [
      { name: 'Kumo', position: Position.top, team: 'EG' },
      { name: 'Svenskeren', position: Position.jng, team: 'EG' },
      { name: 'Jiizuke', position: Position.mid, team: 'EG' },
      { name: 'Bang', position: Position.adc, team: 'EG' },
      { name: 'Zeyzal', position: Position.sup, team: 'EG' },
      null,
      { name: 'Evil Geniuses', position: Position.team, team: 'EG' }
    ],
    [
      { name: 'V1per', position: Position.top, team: 'FLY' },
      { name: 'Santorin', position: Position.jng, team: 'FLY' },
      { name: 'PowerOfEvil', position: Position.mid, team: 'FLY' },
      { name: 'WildTurtle', position: Position.adc, team: 'FLY' },
      { name: 'IgNar', position: Position.sup, team: 'FLY' },
      null,
      { name: 'FlyQuest', position: Position.team, team: 'FLY' }
    ],
    [
      { name: 'Ssumday', position: Position.top, team: '100' },
      { name: 'Meteos', position: Position.jng, team: '100' },
      { name: 'ry0ma', position: Position.mid, team: '100' },
      { name: 'Cody Sun', position: Position.adc, team: '100' },
      { name: 'Stunt', position: Position.sup, team: '100' },
      null,
      { name: '100 Thieves', position: Position.team, team: '100' }
    ]
  ];

  benches: Player[][] = [
    [
      { name: 'Expect', position: Position.top, team: 'XL' },
      { name: 'Caedrel', position: Position.jng, team: 'XL' },
      { name: 'Mickey', position: Position.mid, team: 'XL' }
    ],
    [
      { name: 'Patrik', position: Position.adc, team: 'XL' },
      { name: 'Tore', position: Position.sup, team: 'XL' },
      { name: 'Excel', position: Position.team, team: 'XL' }
    ],
    [
      { name: 'Finn', position: Position.top, team: 'RGE' },
      { name: 'Inspired', position: Position.jng, team: 'RGE' },
      { name: 'Larssen', position: Position.mid, team: 'RGE' }
    ],
    [
      { name: 'Hans Sama', position: Position.adc, team: 'RGE' },
      { name: 'Vander', position: Position.sup, team: 'RGE' },
      { name: 'Rogue', position: Position.team, team: 'RGE' }
    ],
    [
      { name: 'Odoamne', position: Position.top, team: 'S04' },
      { name: 'Lurox', position: Position.jng, team: 'S04' },
      { name: 'Abbedagge', position: Position.mid, team: 'S04' }
    ]
  ];

  teams: FantasyTeam[] = [
    {
      name: 'A',
      coach: 'Chris',
      roster: this.rosters[0],
      bench: this.benches[0]
    },
    {
      name: 'B',
      coach: 'Vasko',
      roster: this.rosters[1],
      bench: this.benches[1]
    },
    {
      name: 'c',
      coach: 'Griffin',
      roster: this.rosters[2],
      bench: this.benches[2]
    },
    {
      name: 'c',
      coach: 'Andrew',
      roster: this.rosters[3],
      bench: this.benches[3]
    },
    {
      name: 'c',
      coach: 'Alex',
      roster: this.rosters[4],
      bench: this.benches[4]
    }
  ];

  constructor() { }

  getTeams(): FantasyTeam[]{
    return this.teams;
  }

}
