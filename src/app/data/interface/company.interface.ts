import { GroupInterface } from './group.interface';

export interface CompanyInterface {
    id: number;
    title: string;
    groups: GroupInterface[];
}
