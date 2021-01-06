import { Injectable } from '@angular/core';
import { PositionInterface } from '../data/interface/position.interface';
import { Observable } from 'rxjs';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class PositionService extends BackendService {
    public getPositions(): Observable<PositionInterface[]> {
        return this.http.get<PositionInterface[]>(this.backendUrl + '/api/position/list');
    }
}
