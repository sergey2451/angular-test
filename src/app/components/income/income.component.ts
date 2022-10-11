import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IData } from 'src/app/models/alldata';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['../navigator/navigator.component.scss']
})
export class IncomeComponent implements OnInit {

  users: IData[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    let filteredUsers = this.dataService.getData().filter(item => item.type === 'income');
    let sortedData = filteredUsers.sort((a, b) => a.amount - b.amount);

    this.users = sortedData;
  }
}
