export interface FantasyTeam {
    name: string;
    coach: string;
    roster: Player[];
    bench: Player[];
}

export interface Player {
    name: string;
    position: string;
    team: string;
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

export type Team = 'TL' | 'TSM' | 'C9' | 'CLG' | '100' | 'FLY' | 'GGS' | 'IMT' | 'DIG' | 'EG' |
                   'G2' | 'FNC' | 'OG' | 'VIT' | 'MSF' | 'S04' | 'MAD' | 'SK' | 'XL' | 'RGE';
