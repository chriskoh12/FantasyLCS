import { Injectable } from '@angular/core';
import { Player, Position, FantasyTeam, Team } from './models/FantasyTeam';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  rosters: Player[][] = [
    [
      { name: 'Broken Blade', position: 'Top', team: 'TSM' },
      { name: 'Dardoch', position: 'Jungle', team: 'TSM' },
      { name: 'Bjergsen', position: 'Mid', team: 'TSM' },
      { name: 'Kobbe', position: 'Bot', team: 'TSM' },
      { name: 'Biofrost', position: 'Support', team: 'TSM' },
      null,
      { name: 'Team SoloMid', position: 'Team', team: 'TSM' }
    ],
    [
      { name: 'Dan Dan', position:'Top', team: 'MSF' },
      { name: 'Razork', position: 'Jungle', team: 'MSF' },
      { name: 'Febiven', position: 'Mid', team: 'MSF' },
      { name: 'Bvoy', position: 'Bot', team: 'MSF' },
      { name: 'Denyk', position: 'Support', team: 'MSF' },
      null,
      { name: 'Misfits', position: 'Team', team: 'MSF' }
    ],
    [
      { name: 'Licorice', position: 'Top', team: 'C9' },
      { name: 'Blaber', position: 'Jungle', team: 'C9' },
      { name: 'Nisqy', position: 'Mid', team: 'C9' },
      { name: 'Zven', position: 'Bot', team: 'C9' },
      { name: 'Vulcan', position: 'Support', team: 'C9' },
      null,
      { name: 'Cloud 9', position: 'Team', team: 'C9' }
    ],
    [
      { name: 'Kumo', position: 'Top', team: 'EG' },
      { name: 'Svenskeren', position: 'Jungle', team: 'EG' },
      { name: 'Jiizuke', position: 'Mid', team: 'EG' },
      { name: 'Bang', position: 'Bot', team: 'EG' },
      { name: 'Zeyzal', position: 'Support', team: 'EG' },
      null,
      { name: 'Evil Geniuses', position: 'Team', team: 'EG' }
    ],
    [
      { name: 'V1per', position: 'Top', team: 'FLY' },
      { name: 'Santorin', position: 'Jungle', team: 'FLY' },
      { name: 'PowerOfEvil', position: 'Mid', team: 'FLY' },
      { name: 'WildTurtle', position: 'Bot', team: 'FLY' },
      { name: 'IgNar', position: 'Support', team: 'FLY' },
      null,
      { name: 'FlyQuest', position: 'Team', team: 'FLY' }
    ],
    [
      { name: 'Ssumday', position: 'Top', team: '100' },
      { name: 'Meteos', position: 'Jungle', team: '100' },
      { name: 'ry0ma', position: 'Mid', team: '100' },
      { name: 'Cody Sun', position: 'Bot', team: '100' },
      { name: 'Stunt', position: 'Support', team: '100' },
      null,
      { name: '100 Thieves', position: 'Team', team: '100' }
    ]
  ];

  teamsList: Team[] = ['TL', 'TSM', 'C9', 'CLG', '100', 'FLY', 'GGS', 'IMT', 'DIG', 'EG',
  'G2', 'FNC', 'OG', 'VIT', 'MSF', 'S04', 'MAD', 'SK', 'XL', 'RGE'];

  freeAgentsArray: Player[] = [
    { name: 'V1per', position: 'Top', team: 'FLY' },
    { name: 'Santorin', position: 'Jungle', team: 'FLY' },
    { name: 'PowerOfEvil', position: 'Mid', team: 'FLY' },
    { name: 'WildTurtle', position: 'Bot', team: 'FLY' },
    { name: 'IgNar', position: 'Support', team: 'FLY' },
    { name: 'FlyQuest', position: 'Team', team: 'FLY' },
    { name: 'V1per', position: 'Top', team: 'FLY' },
    { name: 'Santorin', position: 'Jungle', team: 'FLY' },
    { name: 'PowerOfEvil', position: 'Mid', team: 'FLY' },
    { name: 'WildTurtle', position: 'Bot', team: 'FLY' },
    { name: 'IgNar', position: 'Support', team: 'FLY' },
    { name: 'FlyQuest', position: 'Team', team: 'FLY' },
    { name: 'V1per', position: 'Top', team: 'FLY' },
    { name: 'Santorin', position: 'Jungle', team: 'FLY' },
    { name: 'PowerOfEvil', position: 'Mid', team: 'FLY' },
    { name: 'WildTurtle', position: 'Bot', team: 'FLY' },
    { name: 'IgNar', position: 'Support', team: 'FLY' },
    { name: 'FlyQuest', position: 'Team', team: 'FLY' },
    { name: 'V1per', position: 'Top', team: 'FLY' },
    { name: 'Santorin', position: 'Jungle', team: 'FLY' },
    { name: 'PowerOfEvil', position: 'Mid', team: 'FLY' },
    { name: 'WildTurtle', position: 'Bot', team: 'FLY' },
    { name: 'IgNar', position: 'Support', team: 'FLY' },
    { name: 'FlyQuest', position: 'Team', team: 'FLY' },
    { name: 'V1per', position: 'Top', team: 'FLY' },
    { name: 'Santorin', position: 'Jungle', team: 'FLY' },
    { name: 'PowerOfEvil', position: 'Mid', team: 'FLY' },
    { name: 'WildTurtle', position: 'Bot', team: 'FLY' },
    { name: 'IgNar', position: 'Support', team: 'FLY' },
    { name: 'FlyQuest', position: 'Team', team: 'FLY' },
    { name: 'V1per', position: 'Top', team: 'FLY' },
    { name: 'Santorin', position: 'Jungle', team: 'FLY' },
    { name: 'PowerOfEvil', position: 'Mid', team: 'FLY' },
    { name: 'WildTurtle', position: 'Bot', team: 'FLY' },
    { name: 'IgNar', position: 'Support', team: 'FLY' },
    { name: 'FlyQuest', position: 'Team', team: 'FLY' }
  ];

  benches: Player[][] = [
    [
      { name: 'Expect', position: 'Top', team: 'XL' },
      { name: 'Caedrel', position: 'Jungle', team: 'XL' },
      { name: 'Mickey', position: 'Mid', team: 'XL' }
    ],
    [
      { name: 'Patrik', position: 'Bot', team: 'XL' },
      { name: 'Tore', position: 'Support', team: 'XL' },
      { name: 'Excel', position: 'Team', team: 'XL' }
    ],
    [
      { name: 'Finn', position: 'Top', team: 'RGE' },
      { name: 'Inspired', position: 'Jungle', team: 'RGE' },
      { name: 'Larssen', position: 'Mid', team: 'RGE' }
    ],
    [
      { name: 'Hans Sama', position: 'Bot', team: 'RGE' },
      { name: 'Vander', position: 'Support', team: 'RGE' },
      { name: 'Rogue', position: 'Team', team: 'RGE' }
    ],
    [
      { name: 'Odoamne', position: 'Top', team: 'S04' },
      { name: 'Lurox', position: 'Jungle', team: 'S04' },
      { name: 'Abbedagge', position: 'Mid', team: 'S04' }
    ]
  ];

  fantasyTeams: FantasyTeam[] = [
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
      name: 'C',
      coach: 'Griffin',
      roster: this.rosters[2],
      bench: this.benches[2]
    },
    {
      name: 'D',
      coach: 'Andrew',
      roster: this.rosters[3],
      bench: this.benches[3]
    },
    {
      name: 'E',
      coach: 'Alex',
      roster: this.rosters[4],
      bench: this.benches[4]
    }
  ];

  constructor() { }

  getFantasyTeams(): FantasyTeam[] {
    return this.fantasyTeams;
  }

  getFreeAgents(): Player[] {
    return this.freeAgentsArray;
  }

  getTeamsList(): Team[] {
    return this.teamsList;
  }
}
