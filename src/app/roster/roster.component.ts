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
      { name: 'BrokenBlade', position: 'top' },
      { name: 'Dardoch', position: 'jng' },
      { name: 'Bjergsen', position: 'mid' },
      { name: 'Kobbe', position: 'adc' },
      { name: 'Biofrost', position: 'sup' },
      { name: '', position: 'mid' },
      { name: 'Team Solo Mid', position: 'team' }
    ],
    // [
    //   { name: 'BrokenBlade', position: 'top' },
    //   { name: 'Dardoch', position: 'jng' },
    //   { name: 'Bjergsen', position: 'mid' },
    //   { name: 'Kobbe', position: 'adc' },
    //   { name: 'Biofrost', position: 'sup' },
    //   { name: 'Bjergsen', position: 'mid' },
    //   { name: 'Team Solo Mid', position: 'team' }
    // ],
    [
      { name: 'Licorice', position: 'top' },
      { name: 'Blaber', position: 'jng' },
      { name: 'Nisqy', position: 'mid' },
      { name: 'Zven', position: 'adc' },
      { name: 'Vulcan', position: 'sup' },
      { name: '', position: 'mid' },
      { name: '', position: 'team' }
    ]
    // ['BrokenBlade', 'Dardoch', 'Bjergsen', 'Kobbe', 'Biofrost'],
    // ['Licorice', 'Blaber', 'Nisqy', 'Zven', 'Vulcan'],
    // ['Wunder', 'Jankos', 'Perkz', 'Caps', 'Mikyx'],
    // ['Bwipo', 'Selfmade', 'Nemesis', 'Rekkles', 'Hylissang'],
    // ['Alphari', 'Xerxe', 'NukeDuck', 'Upset', 'Destiny']
  ];

  benches: Player[][] = [
    [
      { name: 'BrokenBlade', position: 'top' },
      { name: 'Dardoch', position: 'jng' },
      { name: 'Bjergsen', position: 'mid' }
    ],
    [
      { name: 'BrokenBlade', position: 'top' },
      { name: 'Dardoch', position: 'jng' },
      { name: 'Bjergsen', position: 'mid' }
    ],
    [
      { name: 'BrokenBlade', position: 'top' },
      { name: 'Dardoch', position: 'jng' },
      { name: 'Bjergsen', position: 'mid' }
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
    // console.log(event);
    const prevTeam: number = +event.previousContainer.data[0];
    const prevPlayer: number = +event.previousContainer.data[1];
    const team: number = +event.container.data[0];
    const player: number = +event.container.data[1];
    [this.rosters[prevTeam][prevPlayer], this.rosters[team][player]] = [this.rosters[team][player], this.rosters[prevTeam][prevPlayer]];
    // console.log("move " + event.container.data)
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    //   //moveItemInArray(this.roster, event.previousIndex, event.currentIndex);
    // } else {
    //   transferArrayItem(event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex);
    // }
  }

  getPicture(playerName: string): string {
    return '/assets/' + playerName.replace(/\s/g, '') + '.png';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
