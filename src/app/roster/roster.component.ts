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
    // [
    //   { name: 'BrokenBlade', Position.top },
    //   { name: 'Dardoch', position: Position.jng },
    //   { name: 'Bjergsen', position: Position.mid },
    //   { name: 'Kobbe', position: 'adc' },
    //   { name: 'Biofrost', position: 'sup' },
    //   { name: 'Bjergsen', position: Position.mid },
    //   { name: 'Team Solo Mid', position: 'team' }
    // ],
    [
      { name: 'Licorice', position: Position.top },
      { name: 'Blaber', position: Position.jng },
      { name: 'Nisqy', position: Position.mid },
      { name: 'Zven', position: Position.adc },
      { name: 'Vulcan', position: Position.sup },
      null,
      null
    ]
    // ['BrokenBlade', 'Dardoch', 'Bjergsen', 'Kobbe', 'Biofrost'],
    // ['Licorice', 'Blaber', 'Nisqy', 'Zven', 'Vulcan'],
    // ['Wunder', 'Jankos', 'Perkz', 'Caps', 'Mikyx'],
    // ['Bwipo', 'Selfmade', 'Nemesis', 'Rekkles', 'Hylissang'],
    // ['Alphari', 'Xerxe', 'NukeDuck', 'Upset', 'Destiny']
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
    // {
    //   teamName: 'c',
    //   teamLeader: 'Griffin',
    //   roster: this.rosters[2],
    //   bench: this.benches[2]
    // }
  ];

  drop(event: CdkDragDrop<string[]>): void {
    const prevTeam: number = +event.previousContainer.data[0];
    const prevPlayer: number = +event.previousContainer.data[1];
    const team: number = +event.container.data[0];
    const player: number = +event.container.data[1];
    console.log(this.checkPlayerRole(this.rosters[prevTeam][prevPlayer], player));
    [this.rosters[prevTeam][prevPlayer], this.rosters[team][player]] = [this.rosters[team][player], this.rosters[prevTeam][prevPlayer]];
  }

  checkPlayerRole(player: Player, rosterPosition: number): boolean {
    if (player.position === rosterPosition){
      return true;
    }
    return false;
  }

  getPicture(playerName: string): string {
    return '/assets/' + playerName.replace(/\s/g, '') + '.png';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
