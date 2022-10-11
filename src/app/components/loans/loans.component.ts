import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IData } from 'src/app/models/alldata';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['../navigator/navigator.component.scss']
})
export class LoansComponent implements OnInit {

  users: IData[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    let filteredUsers = this.dataService.getData().filter(item => item.type === 'loan');
    let sortedData = filteredUsers.sort((a, b) => b.amount - a.amount);

    this.users = sortedData;
  }
}
