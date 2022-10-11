import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IData } from 'src/app/models/alldata';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['../navigator/navigator.component.scss']
})
export class OutcomeComponent implements OnInit {

  users: IData[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    let filteredUsers = this.dataService.getData().filter(item => item.type === 'outcome');

    this.users = filteredUsers;
  }
}
