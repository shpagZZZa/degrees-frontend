import { Injectable } from '@angular/core';
import { GroupInterface } from '../data/interface/group.interface';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class GroupService extends BackendService{

    public getGroup(id: number): Observable<GroupInterface> {
        return this.http.get<GroupInterface>(this.backendUrl + '/api/group/' + id);
    }
}
