import { Injectable } from '@angular/core';
import { PositionInterface } from '../data/interface/position.interface';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PositionService extends BackendService {
    public save(title: string, companyId: string): Observable<PositionInterface> {
        return this.http.post<PositionInterface>(`${environment.apiUrl}/position`, {
            title, companyId
        });
    }
    public getPositions(): Observable<PositionInterface[]> {
        return this.http.get<PositionInterface[]>(this.backendUrl + '/api/position/list');
    }
}
