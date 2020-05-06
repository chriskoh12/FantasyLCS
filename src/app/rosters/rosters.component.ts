import { Component, OnInit } from '@angular/core';
import { Player, Position, FantasyTeam } from '../models/FantasyTeam';
import { transferArrayItem } from '@angular/cdk/drag-drop';
import { MoveEvent } from '../models/MoveEvent';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-rosters',
  templateUrl: './rosters.component.html',
  styleUrls: ['./rosters.component.css']
})
export class RostersComponent implements OnInit {

  MAX_ROSTER_SIZE = 10;

  teams: FantasyTeam[];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
  }

  getTeams(): void{
    this.teams = this.teamService.getTeams();
  }

  /*
  4 cases of player moves that need to be handled differently:
  roster to roster (check if both players can fit into their roles, if not then cancel swap or move a player to bench)
  roster to bench (transfer player to bench, then fill in the spot with a null player)
  bench to roster (check if player can fit in slot, if so then move them and splice out the spot where they were)
  bench to bench (just transfer the player to the other array)
  */
  handlePlayerMove(moveEvent: MoveEvent) { // TODO refactor for better organization
    const { prevTeam, prevSpot, nextTeam, nextSpot } = moveEvent; // destructure moveEvent for easier var names

    if (moveEvent.from === 'roster') {
      if (moveEvent.to === 'roster') { // if moving from roster to roster
        const actionAllowed = this.checkPlayerSwapValid(prevTeam, prevSpot, nextTeam, nextSpot);
        if (actionAllowed === 1) {
          [this.teams[prevTeam].roster[prevSpot], this.teams[nextTeam].roster[nextSpot]]
            = [this.teams[nextTeam].roster[nextSpot], this.teams[prevTeam].roster[prevSpot]];
        }
        else if (actionAllowed === 0 && !this.isRosterFull(nextTeam)) {
          // move other player to bench
          transferArrayItem(this.teams[nextTeam].roster, this.teams[nextTeam].bench, nextSpot, this.teams[nextTeam].bench.length);
          transferArrayItem(this.teams[prevTeam].roster, this.teams[nextTeam].roster, prevSpot, nextSpot); // move player to destination
          this.teams[prevTeam].roster.splice(prevSpot, 0, null); // fill the player's previous spot with null player
        }
      }

      else { // if moving from roster to bench
        if (!this.isRosterFull(nextTeam)){
          transferArrayItem(this.teams[prevTeam].roster, this.teams[nextTeam].bench, prevSpot, nextSpot);
          this.teams[prevTeam].roster.splice(prevSpot, 0, null);
        }
      }
    }

    else { // from bench
      if (moveEvent.to === 'roster') { // if moving from bench to roster
        const playerPos = this.teams[prevTeam].bench[prevSpot].position; // position of bench player being moved
        const destPos = nextSpot; // position of destination role
        const moveAllowed = this.checkPlayerValid(playerPos, destPos);
        if (moveAllowed) {
          if (this.teams[nextTeam].roster[nextSpot]) { // if there is a player in the destination spot, swap them
            [this.teams[nextTeam].roster[nextSpot], this.teams[prevTeam].bench[prevSpot]]
              = [this.teams[prevTeam].bench[prevSpot], this.teams[nextTeam].roster[nextSpot]];
          }
          else { // if the destination spot is blank, just put them in
            if (!this.isRosterFull(nextTeam)){
              transferArrayItem(this.teams[prevTeam].bench, this.teams[nextTeam].roster, prevSpot, nextSpot);
              this.teams[nextTeam].roster.splice(destPos + 1, 1);
            }
          }
        }
      }
      else { // if moving from bench to bench
        if (!this.isRosterFull(nextTeam)){
          transferArrayItem(this.teams[prevTeam].bench, this.teams[nextTeam].bench, prevSpot, nextSpot);
        }
      }
    }
  }

  checkPlayerSwapValid(prevTeam: number, prevSpot: number, nextTeam: number, nextSpot: number): number {
    const firstPlayerPos = this.teams[prevTeam].roster[prevSpot].position;
    const secondPlayerPos = this.teams[nextTeam].roster[nextSpot] ? this.teams[nextTeam].roster[nextSpot].position : null;
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

  isRosterFull(teamNum: number): boolean {
    let count = 0;
    this.teams[teamNum].roster.forEach(player => {
      if (player) {
        count++;
      }
    });
    count += this.teams[teamNum].bench.length;
    console.log('roster size is ' + count);
    return count === this.MAX_ROSTER_SIZE;
  }

}
