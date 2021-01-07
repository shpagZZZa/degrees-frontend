import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() title = '';
    @Input() subtitle = '';
    @Input() link?: string;

    @Input() actionId: number | null = null;
    @Input() actionButton: string | null = null;
    @Output() action = new EventEmitter<number>();

    constructor() { }

    ngOnInit(): void {
    }

}
