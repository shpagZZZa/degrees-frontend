import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent {

    @Input() subject!: Subject<any>;

    constructor(private modalService: NgbModal) {
        console.log(this.subject);
        this.subject.subscribe(
            openModal => {
                console.log(openModal);
            }
        );
    }

    open(content: any): void {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
    }
}
