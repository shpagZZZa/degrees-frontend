import { PositionInterface } from './position.interface';
import { GroupInterface } from './group.interface';

export interface EmployeeInterface {
    id: number;
    full_name: string;
    position: PositionInterface;
    group: GroupInterface;
}
