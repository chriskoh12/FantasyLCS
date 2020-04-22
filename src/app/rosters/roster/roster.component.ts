import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';
import { FantasyTeam, Player, Position } from '../../models/FantasyTeam';
import { MoveEvent, PlayerLoc } from '../../models/MoveEvent';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  @Input() team: FantasyTeam;
  @Input() teamNum: number;

  @Output() playerMoved = new EventEmitter<MoveEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  getPortraitHeight(){
    return {
      'height': '47px'
    };
  }

  returnStyle(team: string) {
    return {
      'background-image': 'url("../../assets/' + team + '.png")',
      // 'background-repeat': 'no-repeat',
      // 'background-size': '300px 58.41px'
    };
  }

  playerMove(event: CdkDragDrop<[PlayerLoc, number, number]>): void { // emits the indices of the spots that are being moved between
    const moveEvent: MoveEvent = {
      from: event.previousContainer.data[0],
      to: event.container.data[0],
      prevTeam: event.previousContainer.data[1],
      prevSpot: event.previousContainer.data[2] ? event.previousContainer.data[2] : event.previousIndex, // is null if coming from bench
      nextTeam: event.container.data[1],
      nextSpot: event.container.data[2] ? event.container.data[2] : event.currentIndex // is null if going to bench
    };
    this.playerMoved.emit(moveEvent);
  }

  positionPredicate(positionNum: number): (eventData: CdkDrag<Position>) => boolean{
    // console.log(positionNum);
    return (eventData => {
      // console.log(eventData.data);
      if (positionNum === 5 && eventData.data !== 6){
        // console.log('returning true');
        return true;
      }
      // console.log('returrning ' + (positionNum === eventData.data));
      return positionNum === eventData.data;
    });
  }

}
