import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-page',
  templateUrl: './dialog-page.component.html',
  styleUrls: ['./dialog-page.component.css']
})
export class DialogPageComponent implements OnInit {

  constructor() { }

  public clients: number [] = [];

  public selectedIndex: number = 0;



  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.clients.push(i);
    }
    console.log(this.clients);
    // https://us.niemvuilaptrinh.com/article/examples-of-chat-box-design-html-css
  }


  public setIndex(index: number) {
    this.selectedIndex = index;
  }

}
