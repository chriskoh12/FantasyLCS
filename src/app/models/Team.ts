export class FantasyTeam {
    name: string;
    coach: string;
    roster: Player[];
    bench: Player[];
}

export class Player {
    name: string;
    position: Position;
    team: Team;
}

export enum Position { // Enum used to be able to use addition to determine cdkDropList role type
    top = 0,
    jng,
    mid,
    adc,
    sup,
    flex,
    team
}

export type Team = 'TL' | 'TSM' | 'C9' | 'CLG' | '100T' | 'FLY' | 'GGS' | 'IMT' | 'DIG' | 'EG' |
                   'G2' | 'FNC' | 'OG' | 'VIT' | 'MSF' | 'S04' | 'MAD' | 'SK' | 'XL' | 'RGE';
