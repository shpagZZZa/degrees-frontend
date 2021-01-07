import { GroupInterface } from './group.interface';
import { PositionInterface } from './position.interface';

export interface CompanyInterface {
    id: number;
    title: string;
    groups: GroupInterface[];
    positions: PositionInterface[];
}
