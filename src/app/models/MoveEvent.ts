export interface MoveEvent {
    from: PlayerLoc;
    to: PlayerLoc;
    prevTeam: number;
    prevSpot: number;
    nextTeam: number;
    nextSpot: number;
}

export type PlayerLoc = 'roster' | 'bench';
