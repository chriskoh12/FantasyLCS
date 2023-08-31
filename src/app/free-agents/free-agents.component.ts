import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { FantasyTeam, Team, Player } from '../models/FantasyTeam';
import { TeamService } from '../team.service';
import { SortBy } from '../models/SortBy';
import { PlayerMoveEvent } from '../models/MoveEvents';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MatTableDataSource } from '@angular/material/table';
import { EmpFilter, filterOption } from '../models/empfilter';
import { MatSelectChange } from '@angular/material/select';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-free-agents',
  templateUrl: './free-agents.component.html',
  styleUrls: ['./free-agents.component.css'],
})
export class FreeAgentsComponent implements OnInit, AfterViewInit {

  PORTRAIT_HEIGHT = '47px';
  PORTRAIT_WIDTH = '59.42px';

  @Input() fantasyTeams: FantasyTeam[];
  @Input() freeAgents: Player[];
  @ViewChild('empTbSort') empTbSort = new MatSort();
  @Output() playerMoved = new EventEmitter<PlayerMoveEvent>();


  teamsList: Team[];
  teamListStrings: string[] = ['100','FLY','All'];
  rolesList: string[] = ['Top', 'Jungle', 'Mid', 'Bot', 'Support', 'Team', 'All'];
  coachList: string[] = [ 'Alex', 'Andrew', 'Chris', 'Griffin', 'Free Agent', 'All'];
  selectedFantasyTeam: FantasyTeam;
  defaultValue = "All";
  sortBy: SortBy = 'alpha';
  owned = 'all';
  displayedColumns: string[] = ['name', 'team', 'position', 'averagePts', 'coach', 'button'];
  selectedTeams: Team[];
  selectedRoles: string[];
  dataSource = new MatTableDataSource();
  empFilters: EmpFilter[]=[];
  filterDictionary= new Map<string,string>();
  dataSourceFilters = new MatTableDataSource();
  constructor(private teamService: TeamService) { }

  ngAfterViewInit(): void {
    this.dataSourceFilters.sort = this.empTbSort;
  }

  ngOnInit(): void {
    this.getTeamsList();
    this.selectedTeams = this.teamsList;
    this.selectedFantasyTeam = this.fantasyTeams[0];
    this.selectedRoles = ['Top', 'Jungle', 'Mid', 'Bot', 'Support', 'Team', 'All'];
    this.dataSource = new MatTableDataSource(this.freeAgents);
    this.dataSource.sort = this.empTbSort;
    this.dataSourceFilters = new MatTableDataSource(this.freeAgents);
    this.empFilters.push({name:"Position", options: this.selectedRoles, defaultValue: this.defaultValue })
    this.empFilters.push({name:"Team", options: this.teamListStrings, defaultValue:this.defaultValue})
    this.empFilters.push({name:"Coach", options: this.coachList, defaultValue:this.defaultValue})


    this.dataSourceFilters.filterPredicate = function (record,filter) {
      //debugger;
      var map = new Map(JSON.parse(filter));
      let isMatch = false;
      for(let [key,value] of map){
        isMatch = (value=="All") || (record[key as keyof Player] == value); 
        console.log(isMatch);
        if(!isMatch) return false;
      }
      console.log(isMatch);
      return isMatch;
      
    }
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

    getTeamsList(): void{
    this.teamsList = this.teamService.getTeamsList();
  }

  // gets given fantasyTeam position in the fantasyTeams array by finding the first team name that matches the given team's name
  // each team should have a unique name
  getTeamNum(team: FantasyTeam): number{
    return this.fantasyTeams.findIndex(item => item.name === team.name);
  }

  comparer(s1: string, s2: string): boolean {
    return s1 === s2;
  }

  noMoveIntoFreeAgents(){
    return false;
  }

  handlePlayerMove(playerMoveEvent: PlayerMoveEvent){
    this.playerMoved.emit(playerMoveEvent);
  }


  applyEmpFilter(ob:MatSelectChange,empfilter:EmpFilter) {

    this.filterDictionary.set(empfilter.name,ob.value);


    var jsonString = JSON.stringify(Array.from(this.filterDictionary.entries()));
    
    this.dataSourceFilters.filter = jsonString;
    console.log(ob.value);
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


