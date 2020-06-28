import { Component, OnInit } from '@angular/core';
import { FantasyTeam, Team, Player } from '../models/FantasyTeam';
import { TeamService } from '../team.service';
import { SortBy } from '../models/SortBy';

@Component({
  selector: 'app-free-agents',
  templateUrl: './free-agents.component.html',
  styleUrls: ['./free-agents.component.css'],
})
export class FreeAgentsComponent implements OnInit {

  PORTRAIT_HEIGHT = '47px';
  PORTRAIT_WIDTH = '59.42px';

  teamsList: Team[] = ['TL', 'TSM', 'C9', 'CLG', '100', 'FLY', 'GGS', 'IMT', 'DIG', 'EG',
  'G2', 'FNC', 'OG', 'VIT', 'MSF', 'S04', 'MAD', 'SK', 'XL', 'RGE'];

  rolesList: string[] = ['Top', 'Jungle', 'Mid', 'ADC', 'Sup', 'Flex', 'Team'];

  fantasyTeams: FantasyTeam[];
  selectedFantasyTeam: FantasyTeam;
  sortBy: SortBy = 'alpha';
  owned = 'all';

  selectedTeams: Team[];
  selectedRoles: string[];
  freeAgents: Player[];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.getFantasyTeams();
    this.getFreeAgents();
    this.selectedTeams = ['TL', 'TSM', 'C9', 'CLG', '100', 'FLY', 'GGS', 'IMT', 'DIG', 'EG',
    'G2', 'FNC', 'OG', 'VIT', 'MSF', 'S04', 'MAD', 'SK', 'XL', 'RGE'];
    this.selectedRoles = ['Top', 'Jungle', 'Mid', 'ADC', 'Sup', 'Flex', 'Team'];
    console.log(this.freeAgents);
  }

  getBanner(team: string) {
    return {
      'background-image': 'url("../../assets/Banners/' + team + '.png")',
      'background-size': '420px 47px'
    };
  }

  getPortraitWidth(){ // for team position placeholder
    return {
      width: this.PORTRAIT_WIDTH
    };
  }

  getPortraitHeight(){
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

  getFantasyTeams(): void{
    this.fantasyTeams = this.teamService.getFantasyTeams();
    this.selectedFantasyTeam = this.fantasyTeams[0];
  }

  getFreeAgents(): void{
    this.freeAgents = this.teamService.getFreeAgents();
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

  noMoveIntoFreeAgents(){
    return false;
  }

}
