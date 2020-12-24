import { Injectable } from '@angular/core';
import { PositionInterface } from '../data/interface/position.interface';
import { PositionModel } from '../data/model/position.model';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

    private positions: PositionModel[] = [
        {
            id: 1,
            title: 'бэк',
        },
        {
            id: 2,
            title: 'фронт',
        },
        {
            id: 3,
            title: 'Аналитик',
        },
        {
            id: 4,
            title: 'Младший аналитик',
        },
        {
            id: 5,
            title: 'босс',
        },
        {
            id: 6,
            title: 'бугалтер',
        },
        {
            id: 7,
            title: 'уборщик',
        },
        {
            id: 8,
            title: 'слесарь',
        },
        {
            id: 9,
            title: 'дровосек',
        },
        {
            id: 10,
            title: 'мойщик белья',
        },
    ];

    public getPosition(id: number): PositionModel {
        return this.positions.filter(p => p.id === id)[0];
    }
}
