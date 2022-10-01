import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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

  public searchForm = new FormGroup({
    clientName: new FormControl(),
    lastMessage: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    messenger: new FormControl(),
    phone: new FormControl(),
    tags: new FormControl(),
  });

  public pageLoading: boolean;
  public lastRefreshDate: Date = new Date();
  public disableRefreshButton: boolean;

  constructor() {

  }

  public clients = [];

  public ngOnInit(): void {

    this.getClients();
  }

  public getClients() {
    for (let i = 0; i < 10; i++) {
      const client = {
        clientName: i + 'John smith' + i,
        firstMessageDate: new Date(),
        lastMessage: i + 'It is a long established fact that a reader will be di' +
          'stracted by the readable content of a page when looking at its layout. The p' +
          'oint of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,' +
          ' as opposed to using \'Content here, content here\', making it look like readable English. Ma' +
          'ny desktop publishing packages and web page editors now use Lorem Ipsum as their default model text' +
          ', and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various vers' +
          'ions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
        lastMessageDate: new Date(),
        lastOperator: 'some Operator' + i,
        lastOperatorNumber: '+' + i + '123456',
        messenger: 'send',
        phone: '+' + i + '123456',
        tags: '#one' + i + ',#two' + i,
      };
      this.clients.push(client);

    }
    this.dataSource = new MatTableDataSource<object>(this.clients);
    this.totalElementCount = this.clients.length;

  }

  public onPaginateChange() {
    this.clients = [];
    this.getClients();

  }

  public refreshData(): void {
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

  public filter(field: string, value: any) {
    if (value.length > 1) {
      this.clients = this.clients.filter((client) => {
        console.log(client[field]);
        return client[field].toLowerCase().includes(value.toLowerCase());
      });
      this.dataSource = new MatTableDataSource<object>(this.clients);
      this.totalElementCount = this.clients.length;
    } else {
      this.onPaginateChange();
    }

  }

  public resetFieldFilter(field) {
    this.searchForm.get(field).reset();
    this.onPaginateChange();
  }

}
