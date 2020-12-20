import { Injectable } from '@angular/core';
import { GroupInterface } from '../data/interface/group.interface';
import { GroupModel } from '../data/model/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
    private groups: GroupModel[] = [
        {
            id: 1,
            company_id: 1,
            parent_id: null,
            head_id: 1,
            title: 'разоработчики'
        },
        {
            id: 2,
            company_id: 1,
            parent_id: 1,
            head_id: 2,
            title: 'аналитиик'
        },
        {
            id: 3,
            company_id: 1,
            parent_id: 1,
            head_id: 3,
            title: 'дизайнеры'
        },
        {
            id: 4,
            company_id: 1,
            parent_id: 2,
            head_id: 4,
            title: 'прочая шелупонь'
        },
    ];

    public getGroup(id: number): GroupModel {
        return this.groups.filter(g => g.id === id)[0];
    }

    public getGroups(companyId: number): GroupModel[] {
        return this.groups.filter(g => g.company_id === companyId);
    }

    public getGroupParent(group: GroupModel): GroupModel | null {
        return this.groups.filter(g => g.id === group.parent_id)[0] ?? null;
    }
}
