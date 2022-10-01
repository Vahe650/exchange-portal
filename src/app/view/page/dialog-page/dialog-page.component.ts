import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.css'],
})
export class DialogPageComponent implements OnInit {

  constructor() {
  }

  public clients: any [] = [];

  public selectedIndex = 0;
  public selectedClient: any;

  public ngOnInit(): void {

    for (let i = 1; i < 10; i++) {
      const client = {
        id: 0,
        isOnline: i % 2 === 0,
        name: 'Megan',
        surname: 'LEIB',
        phone: '+374987',
        lastMessage: ' pm at the bar if possible 😳 ',
        lastMessageDate: '12-22-2022 15:33:10',

      };
      client.id = i;
      client.name += i;
      client.surname += i;
      client.phone += i;
      client.lastMessage = i + client.lastMessage;
      this.clients.push(client);
    }
    this.selectedClient = this.clients[0];
    // https://us.niemvuilaptrinh.com/article/examples-of-chat-box-design-html-css
  }

  public setIndex(index: number) {
    this.selectedIndex = index;
    this.selectedClient = this.clients[index];
  }

}
