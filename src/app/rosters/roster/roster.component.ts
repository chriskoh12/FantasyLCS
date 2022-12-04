import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { FantasyTeam, Player, Position } from '../../models/FantasyTeam';
import { PlayerMoveEvent, PlayerLoc } from '../../models/MoveEvents';
import { RostersComponent } from '../rosters.component';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  PORTRAIT_HEIGHT = '47px';
  PORTRAIT_WIDTH = '59.42px';

  @Input() team: FantasyTeam;
  @Input() teamNum: number;

  @Output() playerMoved = new EventEmitter<PlayerMoveEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  getBanner() {
    return {
      'background-image': 'url("../../assets/Banners/Deft2.png")',
      'background-size': '200px 100px'
    };
  }

  getPortraitWidth() { // for team position placeholder
    return {
      width: this.PORTRAIT_WIDTH
    };
  }

  getPortraitHeight() {
    return {
      height: this.PORTRAIT_HEIGHT,
      // 'margin-right': '30px'
    };
  }

  getPlayerPicture(player: Player): string {
    return 'assets/Pictures/' + player.name + '.png';
  }

  getTeamLogo(teamName: string): string {
    return 'assets/Logos/' + teamName + '.png';
  }

  getPlayerPosition(position: Position): string {
    switch (position) {
      case Position.top:
        return 'assets/Positions/top.png';
      case Position.jng:
        return 'assets/Positions/jng.png';
      case Position.mid:
        return 'assets/Positions/mid.png';
      case Position.adc:
        return 'assets/Positions/adc.png';
      case Position.sup:
        return 'assets/Positions/sup.png';
      default:
        return;
    }
  }

  playerMove(event: CdkDragDrop<[PlayerLoc, number, number]>): void { // emits the indices of the spots that are being moved between
    console.log(event);

    // if player is coming from free agents list
    if (event.previousContainer.data[0] === 'free') {
      // if player going to roster
      if (event.container.data[0] === 'roster'){
        const playerMoveEvent: PlayerMoveEvent = {
          from: 'free',
          to: 'roster',
          prevTeam: null,
          prevSpot: event.previousContainer.data[1],
          nextTeam: event.container.data[1],
          nextSpot: event.container.data[2]
        };
        this.playerMoved.emit(playerMoveEvent);
      }
      // if player going to bench
      else {
        const playerMoveEvent: PlayerMoveEvent = {
          from: 'free',
          to: 'bench',
          prevTeam: null,
          prevSpot: event.previousContainer.data[1],
          nextTeam: event.container.data[1],
          nextSpot: event.currentIndex
        };
        this.playerMoved.emit(playerMoveEvent);
      }
    }

    // refactor to make clearer, separate cases maybe?
    // can also only ust event.container.data, don't use event.currentIndex because can be confusing
    else {
      const playerMoveEvent: PlayerMoveEvent = {
        from: event.previousContainer.data[0],
        to: event.container.data[0],
        prevTeam: event.previousContainer.data[1],

        // is null if coming from bench
        prevSpot: event.previousContainer.data.length === 3 ? event.previousContainer.data[2] : event.previousIndex,
        nextTeam: event.container.data[1],
        nextSpot: event.container.data.length === 3 ? event.container.data[2] : event.currentIndex // is null if going to bench
      };
      this.playerMoved.emit(playerMoveEvent);
    }
  }

  // takes in the number of the position and returns a function that only accepts that role
  positionPredicate(positionNum: number): (eventData: CdkDrag<Position>) => boolean {
    // console.log(positionNum);
    return (eventData => {
      console.log(eventData);
      if (positionNum === 5 && eventData.data !== 6) {
        // console.log('returning true');
        return true;
      }
      // console.log('returning ' + (positionNum === eventData.data));
      return positionNum === eventData.data;
    });
  }

}
