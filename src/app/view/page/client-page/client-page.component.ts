import {DatePipe} from '@angular/common';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css'],
})
export class ClientPageComponent implements OnInit {
  @ViewChild(MatPaginator) public paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) public sort: MatSort;
  public totalElementCount = 0;
  public DEFAULT_PAGE_ELEMENT_COUNT = environment.DEFAULT_PAGE_ELEMENT_COUNT;
  public sortedField = 'id';
  public direction = 'DESC';
  public mainLoading: boolean;

  public displayedColumns: string[] = [
    'clientName',
    'firstMessageDate',
    'lastMessage',
    'lastMessageDate',
    'lastOperator',
    'phone_messenger',
    'tags',

  ];
// Subs
  public dataSource: MatTableDataSource<object>;

  private client = {
    clientName: 'John smith',
    firstMessageDate: '2020-12-12',
    lastMessage: 'Some message',
    lastMessageDate: '2022-12-12',
    lastOperator: 'some Operator',
    lastOperatorNumber: '123456',
    messenger: 'send',
    phone: '+987634321',
    tags: '#one,#two',
  };

  constructor(
  ) {

  }

  public ngOnInit(): void {
    const clients = [];
    for (let i = 0; i < 10; i++) {
      this.client.clientName += i;
      clients.push(this.client);

    }
    this.dataSource = new MatTableDataSource<object>(clients);
    this.totalElementCount = clients.length;
  }

  public onPaginateChange() {

  }
}
