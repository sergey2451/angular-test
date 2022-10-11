import { Injectable } from "@angular/core";
import { IAllData, IData } from 'src/app/models/alldata';
import { alldata as data } from 'src/app/data/alldata';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: IAllData = data;

  getData(): IData[] {

    return this.data.data;
  }
}
