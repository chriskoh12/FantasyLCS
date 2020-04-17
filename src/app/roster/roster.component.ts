import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Team, Player, Position } from '../models/Team';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {



  nav: string[] = [
    'nav1',
    'nav2',
    'nav3'
  ];

  positions: string[] = [
    'top',
    'jng',
    'mid',
    'adc',
    'sup'
  ];

  rosters: Player[][] = [
    [
      { name: 'BrokenBlade', position: Position.top },
      { name: 'Dardoch', position: Position.jng },
      { name: 'Bjergsen', position: Position.mid },
      { name: 'Kobbe', position: Position.adc },
      { name: 'Biofrost', position: Position.sup },
      null,
      { name: 'Team Solo Mid', position: Position.team }
    ],
    [
      { name: 'Dan Dan', position: Position.top },
      { name: 'Razork', position: Position.jng },
      { name: 'Febiven', position: Position.mid },
      { name: 'Bvoy', position: Position.adc },
      { name: 'Denyk', position: Position.sup },
      null,
      { name: 'Misfits', position: Position.team }
    ],
    [
      { name: 'Licorice', position: Position.top },
      { name: 'Blaber', position: Position.jng },
      { name: 'Nisqy', position: Position.mid },
      { name: 'Zven', position: Position.adc },
      { name: 'Vulcan', position: Position.sup },
      null,
      { name: 'Cloud 9', position: Position.team }
    ],
    [
      { name: 'Kumo', position: Position.top },
      { name: 'Svenskeren', position: Position.jng },
      { name: 'Jiizuke', position: Position.mid },
      { name: 'Bang', position: Position.adc },
      { name: 'Zeyzal', position: Position.sup },
      null,
      { name: 'Evil Geniuses', position: Position.team }
    ],
    [
      { name: 'V1per', position: Position.top },
      { name: 'Santorin', position: Position.jng },
      { name: 'PowerofEvil', position: Position.mid },
      { name: 'WildTurtle', position: Position.adc },
      { name: 'Ignar', position: Position.sup },
      null,
      { name: 'FlyQuest', position: Position.team }
    ],
    [
      { name: 'V1per', position: Position.top },
      { name: 'Santorin', position: Position.jng },
      { name: 'PowerofEvil', position: Position.mid },
      { name: 'WildTurtle', position: Position.adc },
      { name: 'Ignar', position: Position.sup },
      null,
      { name: 'FlyQuest', position: Position.team }
    ]
  ];

  benches: Player[][] = [
    [
      { name: 'BrokenBlade', position: Position.top },
      { name: 'Dardoch', position: Position.jng },
      { name: 'Bjergsen', position: Position.mid }
    ],
    [
      { name: 'BrokenBlade', position: Position.top },
      { name: 'Dardoch', position: Position.jng },
      { name: 'Bjergsen', position: Position.mid }
    ],
    [
      { name: 'BrokenBlade', position: Position.top },
      { name: 'Dardoch', position: Position.jng },
      { name: 'Bjergsen', position: Position.mid }
    ]
  ];

  teams: Team[] = [
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
      bench: this.benches[2]
    },
    {
      name: 'c',
      coach: 'Alex',
      roster: this.rosters[4],
      bench: this.benches[4]
    }
  ];

  drop(event: CdkDragDrop<string[]>): void {
    const prevTeam: number = +event.previousContainer.data[0];
    const prevPlayer: number = +event.previousContainer.data[1];
    const team: number = +event.container.data[0];
    const player: number = +event.container.data[1];
    [this.rosters[prevTeam][prevPlayer], this.rosters[team][player]] = [this.rosters[team][player], this.rosters[prevTeam][prevPlayer]];
  }

  checkPlayerRole(prevTeam: number, prevPlayer: number, team: number, player: number): boolean {

    return false;
  }

  getPicture(playerName: string): string {
    return '/assets/' + playerName.replace(/\s/g, '') + '.png';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
