import { Injectable } from '@angular/core';
import { GroupInterface } from '../data/interface/group.interface';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService extends BackendService{

    public save(title: string, companyId: string): Observable<GroupInterface> {
        return this.http.post<GroupInterface>(`${environment.apiUrl}/group`, {
            title, companyId
        });
    }

    public setHead(groupId: number, empId: number): Observable<GroupInterface> {
        return this.http.put<GroupInterface>(`${environment.apiUrl}/group/${groupId}`, {
            headId: empId
        });
    }

    public getGroup(id: number): Observable<GroupInterface> {
        return this.http.get<GroupInterface>(this.backendUrl + '/api/group/' + id);
    }
}
