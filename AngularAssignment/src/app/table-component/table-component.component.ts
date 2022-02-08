import { Component, OnInit } from '@angular/core';
import {DataService} from '../service/data.service'

@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit {


  totalLength:any;
  page:number=1;


  users:any;
  constructor(private userData : DataService){
    userData.getData().subscribe((data)=>{
      this.users = data;
    })
  }

  ngOnInit(): void {

  }

}
