export interface MoveEvent {
    from: playerLoc;
    to: playerLoc;
    prevTeam: number;
    prevSpot: number;
    nextTeam: number;
    nextSpot: number;
}

type playerLoc = 'roster' | 'bench';
