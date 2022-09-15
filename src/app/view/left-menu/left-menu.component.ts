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
}
