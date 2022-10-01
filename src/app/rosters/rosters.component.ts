import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Player, Position, FantasyTeam } from '../models/FantasyTeam';
import { transferArrayItem } from '@angular/cdk/drag-drop';
import { PlayerMoveEvent } from '../models/MoveEvents';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-rosters',
  templateUrl: './rosters.component.html',
  styleUrls: ['./rosters.component.css']
})
export class RostersComponent implements OnInit {

  MAX_ROSTER_SIZE = 10;

  @Input() teams: FantasyTeam[];

  @Output() playerMoved = new EventEmitter<PlayerMoveEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  handlePlayerMove(playerMoveEvent: PlayerMoveEvent) {
    this.playerMoved.emit(playerMoveEvent);
    console.log(this.teams)
  }

}
