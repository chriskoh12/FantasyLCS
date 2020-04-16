export class Team {
    name: string;
    coach: string;
    roster: Player[];
    bench: Player[];
}

export class Player {
    name: string;
    position: Position;
}

// export type Position = 'top' | 'jng' | 'mid' | 'adc' | 'sup' | 'team';

export enum Position {
    top = 0,
    jng,
    mid,
    adc,
    sup,
    flex,
    team
}
