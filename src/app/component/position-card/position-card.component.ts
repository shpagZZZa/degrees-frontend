import { Component, Input, OnInit } from '@angular/core';
import { PositionInterface } from '../../data/interface/position.interface';

@Component({
  selector: 'app-position-card',
  templateUrl: './position-card.component.html',
  styleUrls: ['./position-card.component.sass']
})
export class PositionCardComponent {

    @Input() position!: PositionInterface;
    constructor() { }

}
