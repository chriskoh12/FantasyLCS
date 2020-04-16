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
      { name: '', position: 'jng' },
      { name: 'Bjergsen', position: 'mid' },
      { name: '', position: 'adc' },
      { name: 'Biofrost', position: 'sup' },
      { name: '', position: 'mid' },
      { name: 'Team Solo Mid', position: 'team' }
    ],
    [
      { name: 'BrokenBlade', position: 'top' },
      { name: 'Dardoch', position: 'jng' },
      { name: 'Bjergsen', position: 'mid' },
      { name: 'Kobbe', position: 'adc' },
      { name: 'Biofrost', position: 'sup' },
      { name: 'Bjergsen', position: 'mid' },
      { name: 'Team Solo Mid', position: 'team' }
    ],
    [
      { name: 'BrokenBlade', position: 'top' },
      { name: 'Dardoch', position: 'jng' },
      { name: 'Bjergsen', position: 'mid' },
      { name: 'Kobbe', position: 'adc' },
      { name: 'Biofrost', position: 'sup' },
      { name: 'Bjergsen', position: 'mid' },
      { name: 'Team Solo Mid', position: 'team' }
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
      teamName: 'A',
      teamLeader: 'Chris',
      roster: this.rosters[0],
      bench: this.benches[0]
    },
    {
      teamName: 'B',
      teamLeader: 'Vasko',
      roster: this.rosters[1],
      bench: this.benches[1]
    },
    {
      teamName: 'c',
      teamLeader: 'Griffin',
      roster: this.rosters[2],
      bench: this.benches[2]
    }
  ];

  drop(event: CdkDragDrop<string[]>): void {
    console.log(event);
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
