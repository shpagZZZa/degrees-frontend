import { PositionInterface } from './position.interface';
import { GroupInterface } from './group.interface';

export interface EmployeeInterface {
    id: number;
    fullName: string;
    position: PositionInterface;
    group: SimpleGroupInterface;
}

export interface SimpleGroupInterface {
    id: number;
    title: string;
}
