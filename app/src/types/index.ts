export type BadgeType =
  | 'comprehensive'
  | 'specialist'
  | 'research'
  | 'campus'
  | 'fixed'
  | 'spec'
  | 'major'
  | 'flex';

export type AreaAvailability = 'both' | 'major' | 'minor' | 'extended';

export interface AreaItem {
  name: string;
  code?: string;
  availability?: AreaAvailability;
  note?: string;
}

export interface AreaGroup {
  title: string;
  description?: string;
  items: AreaItem[];
}

export interface DoubleDegree {
  name: string;
  code: string;
}

export interface Degree {
  id: string;
  name: string;
  code: string;
  badges: BadgeType[];
  campusNote?: string;
  fixedNote?: string;
  areaGroups?: AreaGroup[];
}

export interface Faculty {
  id: string;
  number: number;
  name: string;
  shortName: string;
  degrees: Degree[];
  doubleDegrees?: DoubleDegree[];
}
