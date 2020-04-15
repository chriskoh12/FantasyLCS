export class Team {
    teamName: string;
    teamLeader: string;
    roster: Player[];
    bench: Player[]
}

export class Player {
    name: string;
    position: Position;
}

export type Position = 'top' | 'jng' | 'mid' | 'adc' | 'sup';