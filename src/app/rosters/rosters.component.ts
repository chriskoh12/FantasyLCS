import { Component, OnInit } from '@angular/core';
import { Player, Position, FantasyTeam } from '../models/FantasyTeam';
import { transferArrayItem } from '@angular/cdk/drag-drop';
import { MoveEvent } from '../models/MoveEvent';

@Component({
  selector: 'app-rosters',
  templateUrl: './rosters.component.html',
  styleUrls: ['./rosters.component.css']
})
export class RostersComponent implements OnInit {

  MAX_ROSTER_SIZE = 10;

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

  ngOnInit(): void {
  }

  /*
  4 cases of player moves that need to be handled differently:
  roster to roster (check if both players can fit into their roles, if not then cancel swap or move a player to bench)
  roster to bench (transfer player to bench, then fill in the spot with a null player)
  bench to roster (check if player can fit in slot, if so then move them and splice out the spot where they were)
  bench to bench (just transfer the player to the other array)
  */
  handlePlayerMove(moveEvent: MoveEvent) {
    const { prevTeam, prevSpot, nextTeam, nextSpot } = moveEvent; // destructure moveEvent for easier var names

    // console.log(this.rosters[prevTeam].length + ' ' + this.benches[prevTeam].length);
    if (this.rosters[nextTeam].length + this.benches[nextTeam].length > this.MAX_ROSTER_SIZE){
      return;
    }

    if (moveEvent.from === 'roster') {
      if (moveEvent.to === 'roster') { // if moving from roster to roster
        const actionAllowed = this.checkPlayerSwapValid(prevTeam, prevSpot, nextTeam, nextSpot);
        if (actionAllowed === 1) {
          [this.rosters[prevTeam][prevSpot], this.rosters[nextTeam][nextSpot]]
            = [this.rosters[nextTeam][nextSpot], this.rosters[prevTeam][prevSpot]];
        }
        else if (actionAllowed === 0) {
          // move other player to bench
          transferArrayItem(this.rosters[nextTeam], this.benches[nextTeam], nextSpot, this.benches[nextTeam].length);
          transferArrayItem(this.rosters[prevTeam], this.rosters[nextTeam], prevSpot, nextSpot); // move player to destination
          this.rosters[prevTeam].splice(prevSpot, 0, null); // fill the player's previous spot with null player
        }
      }

      else { // if moving from roster to bench
        transferArrayItem(this.rosters[prevTeam], this.benches[nextTeam], prevSpot, nextSpot);
        this.rosters[prevTeam].splice(prevSpot, 0, null);
      }
    }

    else { // from bench
      if (moveEvent.to === 'roster') { // if moving from bench to roster
        const playerPos = this.benches[prevTeam][prevSpot].position; // position of bench player being moved
        const destPos = nextSpot; // position of destination role
        const moveAllowed = this.checkPlayerValid(playerPos, destPos);
        if (moveAllowed) {
          if (this.rosters[nextTeam][nextSpot]) { // if there is a player in the destination spot, swap them
            [this.rosters[nextTeam][nextSpot], this.benches[prevTeam][prevSpot]]
              = [this.benches[prevTeam][prevSpot], this.rosters[nextTeam][nextSpot]];
          }
          else { // if the destination spot is blank, just put them in
            transferArrayItem(this.benches[prevTeam], this.rosters[nextTeam], prevSpot, nextSpot);
            this.rosters[nextTeam].splice(destPos + 1, 1);
          }
        }
      }
      else { // if moving from bench to bench
        transferArrayItem(this.benches[prevTeam], this.benches[nextTeam], prevSpot, nextSpot);
      }
    }
  }

  checkPlayerSwapValid(prevTeam: number, prevSpot: number, nextTeam: number, nextSpot: number): number {
    const firstPlayerPos = this.rosters[prevTeam][prevSpot].position;
    const secondPlayerPos = this.rosters[nextTeam][nextSpot] ? this.rosters[nextTeam][nextSpot].position : null;
    const allowMove: boolean = this.checkPlayerValid(firstPlayerPos, Position.top + nextSpot);
    const allowSwap: boolean = this.checkPlayerValid(secondPlayerPos, Position.top + prevSpot);
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

}
