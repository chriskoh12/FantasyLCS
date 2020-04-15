import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Team, Player, Position } from '../models/Team';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  positions: string[] = [
    'top',
    'jng',
    'mid',
    'adc',
    'sup'
  ]

  rosters: Player[][] = [
    [
      { name: 'Impact', position: 'top' }, 
      { name: 'Broxah', position: 'jng' },
      { name: '', position: 'mid' }, 
      { name: 'Doublelift', position: 'adc' }, 
      { name: 'CoreJJ', position: 'sup'}
    ],
    [
      { name: 'Impact', position: 'top' }, 
      { name: 'Broxah', position: 'jng' },
      { name: 'Jensen', position: 'mid' }, 
      { name: 'Doublelift', position: 'adc' }, 
      { name: 'CoreJJ', position: 'sup'}
    ],
    [
      { name: 'Impact', position: 'top' }, 
      { name: 'Broxah', position: 'jng' },
      { name: 'Jensen', position: 'mid' }, 
      { name: 'Doublelift', position: 'adc' }, 
      { name: 'CoreJJ', position: 'sup'}
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
  ]

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

  rosterImg: string[] = [];
  benchImg: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    //   //moveItemInArray(this.roster, event.previousIndex, event.currentIndex);
    // } else {
    //   console.log("transferring " + event.previousContainer.data[event.previousIndex] + " to " + event.container.data + " position " + event.currentIndex);
    //   transferArrayItem(event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex);
    // }
  }

  constructor() { }

  ngOnInit(): void {
    // this.roster.forEach(item => {
    //   this.rosterImg.push("assets/" + item + ".png");
    // })

    // this.bench.forEach(item => {
    //   this.benchImg.push("assets/" + item + ".png");
    // })
  }

}
