import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import {Router} from '@angular/router';

@Component({
  selector: 'app-left-menu',
  styleUrls: ['./left-menu.component.css'],
  templateUrl: './left-menu.component.html',
})
export class LeftMenuComponent implements OnInit {

  constructor(private router: Router) {
  }

  @ViewChild('sidenav') public sidenav: MatSidenav;
  public isExpanded = true;
  public isShowing = false;
  public showSubmenu: boolean[] = [];
  public showSubSubMenu: boolean[] = [];
  public menuColor: string [] = new Array<string>(10);

  public ngOnInit(): void {

  }

  public mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  public mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

  public navigateMenu(index) {

    for (let i = 0; i < this.menuColor.length; i++) {
      if (i === index) {
        this.menuColor[i] = 'color:white';
      } else {
        this.menuColor[i] = '';
      }

    }
  }
}
