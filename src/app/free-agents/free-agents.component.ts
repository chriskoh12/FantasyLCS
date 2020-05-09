import { Component, OnInit } from '@angular/core';
import { FantasyTeam, Team } from '../models/FantasyTeam';
import { TeamService } from '../team.service';
import { SortBy } from '../models/SortBy';

@Component({
  selector: 'app-free-agents',
  templateUrl: './free-agents.component.html',
  styleUrls: ['./free-agents.component.css'],
})
export class FreeAgentsComponent implements OnInit {

  teamsList: Team[] = ['TL', 'TSM', 'C9', 'CLG', '100', 'FLY', 'GGS', 'IMT', 'DIG', 'EG',
  'G2', 'FNC', 'OG', 'VIT', 'MSF', 'S04', 'MAD', 'SK', 'XL', 'RGE'];

  rolesList: string[] = ['Top', 'Jungle', 'Mid', 'ADC', 'Sup', 'Flex', 'Team'];

  fantasyTeams: FantasyTeam[];
  selectedFantasyTeam: FantasyTeam;
  sortBy: SortBy = 'alpha';
  owned = 'all';

  selectedTeams: Team[];
  selectedRoles: string[];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getFantasyTeams();
    this.selectedTeams = ['TL', 'TSM', 'C9', 'CLG', '100', 'FLY', 'GGS', 'IMT', 'DIG', 'EG',
    'G2', 'FNC', 'OG', 'VIT', 'MSF', 'S04', 'MAD', 'SK', 'XL', 'RGE'];
    this.selectedRoles = ['Top', 'Jungle', 'Mid', 'ADC', 'Sup', 'Flex', 'Team'];
    // console.log(this.selectedTeam);
  }

  getFantasyTeams(): void{
    this.fantasyTeams = this.teamService.getFantasyTeams();
    this.selectedFantasyTeam = this.fantasyTeams[0];
  }

  getTeamNum(team: FantasyTeam): number{
    return this.fantasyTeams.findIndex(item => item.name === team.name);
  }

  handlePlayerMove(event){
    console.log(event);
  }

  comparer(s1: string, s2: string): boolean {
    return s1 === s2;
  }

}
