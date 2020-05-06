import { Component, OnInit } from '@angular/core';
import { FantasyTeam } from '../models/FantasyTeam';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-free-agents',
  templateUrl: './free-agents.component.html',
  styleUrls: ['./free-agents.component.css'],
})
export class FreeAgentsComponent implements OnInit {

  teams: FantasyTeam[];
  selectedTeam: FantasyTeam;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getTeams();
    // console.log(this.selectedTeam);
  }

  getTeams(): void{
    this.teams = this.teamService.getTeams();
    this.selectedTeam = this.teams[0];
  }

  getTeamNum(team: FantasyTeam): number{
    return this.teams.findIndex(item => item.name === team.name);
  }

  handlePlayerMove(event){
    console.log(event);
  }

}
