import { Component, OnInit } from '@angular/core';
import { GroupInterface } from '../../data/interface/group.interface';
import { GroupService } from '../../service/group.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import { GroupModel } from '../../data/model/group.model';
import { QuizModel } from '../../data/model/quiz.model';
import { QuizService } from '../../service/quiz.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

    group!: GroupModel;
    parent?: GroupModel | null;

    constructor(
        groupService: GroupService,
        route: ActivatedRoute,
        public employeeService: EmployeeService,
    ) {
        const groupId = parseInt(route.snapshot.paramMap.get('id') as string, 10);
        this.group = groupService.getGroup(groupId);
        this.parent = groupService.getGroupParent(this.group);
    }

    ngOnInit(): void {
    }

}
