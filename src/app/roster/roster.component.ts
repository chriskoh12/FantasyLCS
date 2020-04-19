import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FantasyTeam, Player, Position } from '../models/Team';

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
      { name: 'BrokenBlade', position: Position.top, team: 'TSM' },
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
      { name: 'Ignar', position: Position.sup, team: 'FLY' },
      null,
      { name: 'FlyQuest', position: Position.team, team: 'FLY' }
    ],
    [
      { name: 'Ssumday', position: Position.top, team: '100T' },
      { name: 'Meteos', position: Position.jng, team: '100T' },
      { name: 'ry0ma', position: Position.mid, team: '100T' },
      { name: 'Cody Sun', position: Position.adc, team: '100T' },
      { name: 'Stunt', position: Position.sup, team: '100T' },
      null,
      { name: '100 Thieves', position: Position.team, team: '100T' }
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
      { name: 'VandeR', position: Position.sup, team: 'RGE' },
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

  benchDrop(event: CdkDragDrop<string[]>): void {
    console.log(event);
    if (!(typeof event.previousContainer.data[1] === 'number')){ // if incoming player is from another bench
      const prevTeam = +event.previousContainer.data[0]; // team the player is coming from
      const prevSpot = +event.previousIndex; // spot on bench the player is coming from
      const team = +event.container.data[0]; // team the player is going to
      const spot = +event.currentIndex;
      transferArrayItem(this.benches[prevTeam], this.benches[team], prevSpot, spot);
    }
    else { // if incoming player is from a roster
      const prevTeam: number = +event.previousContainer.data[0];
      const prevPlayer: number = +event.previousContainer.data[1];
      const team: number = +event.container.data[0];
      const benchPosition: number = +event.currentIndex;
      transferArrayItem(this.rosters[prevTeam], this.benches[team], prevPlayer, benchPosition);
      this.rosters[prevTeam].splice(prevPlayer, 0, null);
    }
  }

  rosterDrop(event): void {
    console.log(event);
    if (!(typeof event.previousContainer.data[1] === 'number')) { // if incoming player is from bench
      const playerPos = event.previousContainer.data[1][event.previousIndex].position; // position of bench player being moved
      const destTeam = event.container.data[0];
      const destPos = event.container.data[1]; // position of destination role
      const moveAllowed = this.checkPlayerValid(playerPos, destPos);
      if (moveAllowed) {
        if (this.rosters[destTeam][destPos]) { // if there is a player in the destination spot, swap them
          [this.rosters[destTeam][destPos], this.benches[event.previousContainer.data[0]][event.previousIndex]]
          = [this.benches[event.previousContainer.data[0]][event.previousIndex], this.rosters[destTeam][destPos]];
        }
        else { // if the destination spot is blank, just put them in
          transferArrayItem(this.benches[event.previousContainer.data[0]], this.rosters[destTeam], event.previousIndex, destPos);
          this.rosters[destTeam].splice(destPos + 1, 1);
        }
      }
    }
    else {
      const prevTeam: number = +event.previousContainer.data[0];
      const prevPlayer: number = +event.previousContainer.data[1];
      const team: number = +event.container.data[0];
      const player: number = +event.container.data[1];
      const actionAllowed = this.checkPlayerSwapValid(prevTeam, prevPlayer, team, player);
      if (actionAllowed === 1) {
        [this.rosters[prevTeam][prevPlayer], this.rosters[team][player]]
          = [this.rosters[team][player], this.rosters[prevTeam][prevPlayer]]; // Swap players
      }
      if (actionAllowed === 0) {
        transferArrayItem(this.rosters[team], this.benches[team], player, this.benches[team].length); // move other player to bench
        transferArrayItem(this.rosters[prevTeam], this.rosters[team], prevPlayer, player); // move player to destination
        this.rosters[prevTeam].splice(prevPlayer, 0, null); // fill the player's previous spot with null player
      }
    }
  }

  checkPlayerSwapValid(prevTeam: number, prevPlayer: number, team: number, player: number): number {
    const firstPlayerPos = this.rosters[prevTeam][prevPlayer].position;
    const secondPlayerPos = this.rosters[team][player] ? this.rosters[team][player].position : null;
    const allowMove: boolean = this.checkPlayerValid(firstPlayerPos, Position.top + player);
    const allowSwap: boolean = this.checkPlayerValid(secondPlayerPos, Position.top + prevPlayer);
    if (allowMove) {
      if (allowSwap) {
        return 1; // if players can be swapped
      }
      return 0; // if moving player can move to destination, but other player cannot go to previous location
    }
    return -1; // if moving player cannot be moved to destination
  }

  checkPlayerValid(playerPos: Position, destPos: Position): boolean {
    if (playerPos === null) {
      return true;
    }
    if (destPos === Position.flex && playerPos !== Position.team) {
      return true;
    }
    return destPos === playerPos;
  }

  returnStyle(team: string) {
    return {
      'background-image': 'url("../../assets/' + team + '.png")',
      // 'background-repeat': 'no-repeat',
      // 'background-size': '300px 58.41px'
    };
  }

  returnPosFromNumber(position: number): string { // returns position as a string given the number (based on Position enum)
    switch (position){
      case 0:
        return 'Top';
        break;
      case 1:
        return 'Jng';
        break;
      case 2:
        return 'Mid';
        break;
      case 3:
        return 'ADC';
        break;
      case 4:
        return 'Sup';
        break;
      case 5:
        return 'Flex';
        break;
      case 6:
        return 'Team';
        break;
    }
    return 'Error: invalid position number';
  }

  /* TODO:
    Create insertIntoBench function?
    create more variables so no long strings of event....
    clean up CSS
    add cards for rosters
    rename variables
    change to editing dummy data to editing player roster data
    rename to be consistent (roles/POSITIONS)
    error handling
    testing
  */

  constructor() { }

  ngOnInit(): void {
  }

}
