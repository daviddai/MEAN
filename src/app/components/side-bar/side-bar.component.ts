import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ToggleService } from '../../shared/toggle-service.service';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  animations: [
    trigger('sideBarState', [
      state('hide', style({left: '-50%'})),
      state('show', style({left: '0%'})),
      transition('hide => show', animate('200ms')),
      transition('show => hide', animate('200ms'))
    ])
  ]
})
export class SideBarComponent implements OnInit, OnDestroy {

  sideBarState: string;
  subscription: Subscription;
  menuItems = {};
  objectKeys = Object.keys;

  constructor(private toggleService: ToggleService) {
    this.subscription = this.toggleService.toggleAnnounced$.subscribe(
      () => {
        this.toggleSideBar();
      }
    );
  }

  ngOnInit() {
    this.sideBarState = 'hide';
    this.menuItems = {
      'Home': '/',
      'Sign In': '/login',
      'Sign Up' : '/register',
    };
  }

  toggleSideBar() {
    if (this.sideBarState === SideBarStates.SHOW) {
      this.sideBarState = SideBarStates.HIDE;
    } else {
      this.sideBarState = SideBarStates.SHOW;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

enum SideBarStates {
  HIDE = 'hide',
  SHOW = 'show'
}
