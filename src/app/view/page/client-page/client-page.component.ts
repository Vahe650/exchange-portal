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
    'lastMessage',
    'lastMessageDate',
    'phone',
    'messenger',
    'tags',

  ];
// Subs
  public dataSource: MatTableDataSource<object>;

  private client = {
    clientName: 'John smith',
    firstMessageDate: new Date(),
    lastMessage: 'Some message',
    lastMessageDate: new Date(),
    lastOperator: 'some Operator',
    lastOperatorNumber: '123456',
    messenger: 'send',
    phone: '+987634321',
    tags: '#one,#two',
  };
  public pageLoading: boolean;
  public lastRefreshDate: Date = new Date();
  public disableRefreshButton: boolean;

  constructor() {

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

  public refreshData() {
    this.pageLoading = true;
    this.disableRefreshButton = true;
    setTimeout(() => {
      this.pageLoading = false;
      this.lastRefreshDate = new Date();
    }, 2000);
    setTimeout(() => {
      this.disableRefreshButton = false;
    }, 4000);
  }
}
