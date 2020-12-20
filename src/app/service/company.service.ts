import { Injectable } from '@angular/core';
import { CompanyInterface } from '../data/interface/company.interface';

@Injectable({
    providedIn: 'root'
})
export class CompanyService {
    public getCompany(id: number): CompanyInterface {
        return {
            id: 1,
            title: 'Компания 1'
        };
    }
}
